/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

var tv4 = require('tv4'),
    UINT_REGEX = /^\d+$/,
    // URL regex - Thanks to Diego Perini - https://gist.github.com/dperini/729294
    URL_REGEX = new RegExp(
        '^' +
        // protocol identifier
        '(?:(?:https?|ftp)://)' +
        // user:pass authentication
        '(?:\\S+(?::\\S*)?@)?' +
        '(?:' +
        // IP address exclusion
        // private & local networks
        // (dcs) I have commented this out because we might use local networks
        //  '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
        //  '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
        //  '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
        // IP address dotted notation octets
        // excludes loopback network 0.0.0.0
        // excludes reserved space >= 224.0.0.0
        // excludes network & broacast addresses
        // (first & last IP address of each class)
        '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
        '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
        '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
        '|' +

        // host name
        '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
        // domain name
        '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
        // TLD identifier
        '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
        ')' +
        // port number
        '(?::\\d{2,5})?' +
        // resource path
        '(?:/\\S*)?' +
        '$', 'i'),
    KEYWORDS_REGEX = /^(setting|value|enabled|except)$/,
    EMAIL_REGEX = /^.+@(.+\.)+(.+)$/,
    helpers = require('./helpers.js'),
    TEMPLATE_REGEX = helpers.TEMPLATE_REGEX,
    isTemplate = helpers.isTemplate;

/* Plug the clientSchema into the definitions portion of the cerebroSchema and
 * set up pointers within the `except` block.
 *
 * This method will:
 * 1. Insert the entire clientSchema object into the definitions portion of `schema.json`.
 * 2. Link the clientSchema to the except block in `schema.json`.
 *
 * @param {Object} cerebroSchema The validation for the outline of the schema (setting, value, except)
 * @param {Object} clientSchema The validation for the user-provided values of the schema (all values in except)
 *
 * @return {Object} The generated schema that combines both the schema outline and the user-provided schema.
 */
function _generateSchema(cerebroSchema, clientSchema) {
    var schema = JSON.parse(JSON.stringify(cerebroSchema)), // to not mutate the caller's object
        refLink = '#/definitions/',
        keys = Object.keys(clientSchema);

    // This is how we insert the clientSchema object into the definitions portion of `schema.json`.
    schema.definitions = clientSchema;

    keys.forEach(function(key) {
        // This is how we link the clientSchema to the except block
        schema.items.properties.except.items.properties[key] = {
            $ref: refLink + key
        };
    });

    return schema;
}

/**
 * Verify that there are no cross-setting dependencies in the configuration.
 *
 * In order to depend on a setting, the setting must be evaluated before.  This is done to make run-time shrink
 * from two-pass to one-pass.
 *
 * @param {Object} configuration The configuration under test
 * @return {Object} report object that contains errors and valid.  tv4 outputs errors in the same format.
 */
function _validateCrossSettingDependencies(configuration) {
    var existingSettings = {},
        errors = [];

    configuration.forEach(function(entry) {
        var dependencies = entry.except;

        if (Array.isArray(dependencies)) {
            dependencies.forEach(dependency => {
                var dependencyName = dependency.setting;

                if (dependencyName) {
                    // if an entry depends on itself, error
                    if (dependencyName === entry.setting) {
                        errors.push({
                            message: 'Setting `' + dependencyName + '` depends on itself.'
                        });
                    }

                    // if an entry has not been referenced yet, error
                    if (!existingSettings.hasOwnProperty(dependencyName)) {
                        errors.push({
                            message: 'For ' + entry.setting + ', your dependency `' + dependencyName +
                            '` was referenced before it was resolved. Move the definition of it above ' + entry.setting
                        });
                    }
                }
            });
        }

        // add it to the list of settings that exists
        existingSettings[entry.setting] = true;
    });

    // follow the tv4 output format
    return {
        errors: errors,
        valid: errors.length === 0
    };
}

/* Ensures that all templates in the configuration have the following properties
 * 1. Not part of a value outside of except block
 * 2. Contains only one variable
 * 3. The variable is restricted by the except block's conditions
 * 4. The variable doesn't point to some reserved key like 'value'
 */
function _validateTemplates(config) {
    var errors = [];

    config.forEach(function(entry) {
        if (isTemplate(entry.value)) {
            errors.push({
                message: 'Setting `' + entry.setting + '` has template as toplevel value'
            });
        }

        if (entry.except && Array.isArray(entry.except)) {
            entry.except.forEach(function(exceptBlock) {
                var val = exceptBlock.value,
                    ERROR_PREFIX = 'Template `' + val + '`',
                    variableMatches,
                    match,
                    condition;

                if (!isTemplate(val)) {
                    return;
                }

                variableMatches = val.match(TEMPLATE_REGEX);

                if (variableMatches.length > 1) {
                    errors.push({
                        message: ERROR_PREFIX + ' has more than one variable'
                    });
                } else {
                    match = variableMatches[0];
                    // remove the '${' / '}' and ensure that it exists as a condition
                    condition = match.substring(2, match.length - 1);

                    if (KEYWORDS_REGEX.test(condition)) {
                        errors.push({
                            message: ERROR_PREFIX + ' uses reserved keyword as variable'
                        });
                    }

                    if (!exceptBlock.hasOwnProperty(condition)) {
                        errors.push({
                            message: ERROR_PREFIX + ' doesn\'t have condition on variable'
                        });
                    }
                }
            });
        }
    });

    // follow the tv4 output format
    return {
        errors: errors,
        valid: errors.length === 0
    };
}

/**
 * Verify that the values a single condition match the constraints given by the valueType.
 *
 * @param {} value The configuration value
 * @param {} expectedType The expected type of the value.  This could be a string or an object.
 * @param {Object} errors A tv4 error object containing the errors, what schema types are mismatched,
 *                  and a boolean that describes whether validation passed or not.
 * @return {Object} Returns an error object if there is a validation failure.  Otherwise null.
 */
function _checkValueTypes(value, expectedType) {
    var isRegex,
        pattern,
        regexStr,
        valType = Array.isArray(value) ? 'array' : typeof value;

    // Checks to see if the expected value type was given
    switch (expectedType) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'object':
    case 'array':
        if (expectedType === valType) {
            return null;
        }

        break;
    case 'uint':
        if (UINT_REGEX.test(value)) {
            return null;
        }

        break;

    case 'url':
        if (URL_REGEX.test(value)) {
            return null;
        }

        break;

    case 'email':
        if (EMAIL_REGEX.test(value)) {
            return null;
        }

        break;

    default:
        if (typeof expectedType === 'object') {
            isRegex = expectedType.hasOwnProperty('regex');

            if (isRegex || expectedType.hasOwnProperty('iregex')) {
                if (isRegex) {
                    regexStr = expectedType.regex;
                    pattern = new RegExp(regexStr);
                } else {
                    regexStr = expectedType.iregex;
                    pattern = new RegExp(regexStr, 'i');
                }

                if (pattern.test(value)) {
                    return null;
                }

                return { message: 'The regular expression `' + regexStr + '` failed to validate the value ' + value};
            }

            return { message: 'The object valueType `' + JSON.stringify(expectedType) +
                                        '` is not a known or supported type'};
        }

        return { message: 'The valueType `' + expectedType + '` is not a known or supported type'};
    }

    return { message: 'Value `' + JSON.stringify(value) + '` was expected to be of type ' +
                    expectedType + ', but it is type ' + valType};
}

/**
 * Verify that the values a specific condition (including except blocks) match the constraints given by the valueType.
 *
 * @param configuration The configuration under test
 *
 * @return {Object} A tv4 error object containing the errors, what schema types are mismatched,
 *                  and a boolean that describes whether validation passed or not.
 */
function _validateValueTypes(configuration) {
    var errors = [];

    configuration.forEach(function(entry) {
        var valueType = entry.valueType,
            excepts,
            result;

        if (valueType) {
            result = _checkValueTypes(entry.value, valueType, errors);

            if (result) {
                errors.push(result);
            }

            excepts = entry.except;

            if (excepts) {
                excepts.forEach(function(except) {
                    if (except.value) {
                        result = _checkValueTypes(except.value, valueType, errors);

                        if (result) {
                            errors.push(result);
                        }
                    }
                });
            }
        }
    });

    // follow the tv4 output format
    return {
        errors: errors,
        valid: errors.length === 0
    };
}

function _addErrors(report, errors) {
    report.valid = false;
    report.errors = report.errors.concat(errors);
}

/**
 * Validates the given configuration against the Cerebro schema and any other rules the client has passed in.
 * This is the sole public interface of this module.
 *
 * @param clientSchema The validation for the user-provided values of the schema (all values in except)
 * @param configuration The configuration under test
 *
 * @return {Object} An object containing the errors, what schema is missing, and a boolean that describes whether
 *      validation passed or not.  For more detail, see https://www.npmjs.com/package/tv4#usage-3-multiple-errors
 */
module.exports = function validate(clientSchema, configuration) {
    var cerebroSchema = require('./schema.json'),
        schema = _generateSchema(cerebroSchema, clientSchema),
        checkRecursive = false, // check for circular references in the schema
        banUnknownProperties = true, // check for any unknown properties in the schema
        errorReport = tv4.validateMultiple(
            configuration,
            schema,
            checkRecursive,
            banUnknownProperties
        ),
        valueTypeErrorReport = _validateValueTypes(configuration),
        templateErrorReport = _validateTemplates(configuration),
        crossSettingErrorReport = _validateCrossSettingDependencies(configuration);

    if (!valueTypeErrorReport.valid) {
        _addErrors(errorReport, valueTypeErrorReport.errors);
    }

    if (!crossSettingErrorReport.valid) {
        _addErrors(errorReport, crossSettingErrorReport.errors);
    }

    if (!templateErrorReport.valid) {
        _addErrors(errorReport, templateErrorReport.errors);
    }

    return errorReport;
};
