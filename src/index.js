/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

var Evaluator = require('./evaluator.js');

/**
 * @param {Array} config - array containing setting entries
 * @param {Object} [Optional] options Object containing customEvaluators
 *      @param {Object} customEvaluators object containing the custom evaluation methods
 */
function Cerebro(config, options) {
    if (!config) {
        throw new Error('`config` is required');
    }

    this._config = this._preprocess(config);
    this._customEvaluators = options && options.customEvaluators;

    this._validateCustomEvaluators();
}

/**
 * Builds a config based on provided context
 * @param  {Object} context
 * @param  {Object} [options]
 * @param  {Object} [options.overrides] - contains the list of overrides {setting: 'value'}
 * @return {CerebroConfig}
 */
Cerebro.prototype.resolveConfig = function(context, options) {
    if (!context) {
        throw new Error('`context` is required');
    }

    options = options || {};

    return new CerebroConfig(this._build(context, options.overrides));
};

/**
 * Parses the dehydrated object for use on the client.
 * Intended to be used on the client.
 * The input of this function is expected to be the output of dehydrate().
 *
 * @param {JSON} dehydratedObject The output of #dehydrate()
 * @return {CerebroConfig} A usable instance of CerebroConfig
 */
Cerebro.rehydrate = function(dehydratedObject) {
    // if the dehydratedObject is not valid, JSON parse will fail and throw an error
    var rehydratedObj = JSON.parse(dehydratedObject);

    const {_resolved, _labels} = rehydratedObj;
    const builtObject = {
        answers: _resolved,
        labels: _labels
    };

    return new CerebroConfig(builtObject);
};

/**
 * Wrapper for resolvedConfig that provides convenience methods for checking value types and dehydration
 * @constructor
 * @param {Object} resolvedConfig - object created by building context with settings config
 */
function CerebroConfig(resolvedConfig = {}) {
    if (!resolvedConfig.answers) {
        throw new Error('`resolvedConfig` is required');
    }

    this._resolved = resolvedConfig.answers;
    this._labels = resolvedConfig.labels;
}

/**
 * Gets the requested value if it is a Boolean.  Returns null if the value does not exist.
 * Throws an error if the requested value is not a Boolean.
 *
 * @param {String} name The name of the setting that you want to value of
 * @return {Boolean|null} The value of the setting
 */
CerebroConfig.prototype.isEnabled = function(name) {
    var setting = this._resolved[name];

    if (typeof setting === 'undefined') {
        return null;
    }

    if (typeof setting !== 'boolean') {
        throw new Error('The requested setting (' + name + ') from isEnabled is not a boolean. ' +
            'It is a ' + typeof setting + '.  Please use #getValue instead.');
    }

    return setting;
};

/**
 * Gets the requested value if it is not a Boolean.  Returns null if the value does not exist.
 * Throws an error if the requested value is a Boolean.
 *
 * @param {String} name The name of the setting that you want to value of
 * @return {!Boolean|*} The value of the setting
 */
CerebroConfig.prototype.getValue = function(name) {
    var setting = this._resolved[name];

    if (typeof setting === 'undefined') {
        return null;
    }

    if (typeof setting === 'boolean') {
        throw new Error('The requested setting (' + name + ') from isEnabled is a boolean.  ' +
            'Please use #isEnabled instead.');
    }

    return setting;
};

/**
 * Serializes the object to send to the client.
 * Intended to be used on the server.
 * The output of this function must be rehydrated on the client.
 *
 * @return {JSON} Map of settings to values.
 */
CerebroConfig.prototype.dehydrate = function() {
    const {_resolved, _labels} = this;
    const dehydratedObject = {_resolved, _labels};

    return JSON.stringify(dehydratedObject);
};

/**
 * Returns the resolved config.
 * NOTE: This does not deep clone the object, which means that clients could abuse this
 * by changing values.  Doing a deep clone will obviously impact performance.
 *
 * @return {Object} The resolved config.
 */
CerebroConfig.prototype.getRawConfig = function() {
    return this._resolved;
};

/**
 * Returns the labels from the entries
 *
 * @return {Object} The labels as an object just like getRawConfig,
 * where each key is setting name and its value is an array of string labels.
 * Entries with no labels are represented as an empty array (not undefined).
 */
CerebroConfig.prototype.getLabels = function() {
    return this._labels;
};

/** @private */
Cerebro.prototype._preprocess = function(config) {
    // should maybe deep copy the config?
    return config.map(function(c) {
        return Evaluator.prepareEntry(c);
    });
};

/** @private */
Cerebro.prototype._build = function(context, overrides) {
    var answers = {},
        labels = {},
        answer;

    this._config.forEach(function(entry) {
        answer = Evaluator.evaluate(entry, context, overrides, answers, this._customEvaluators);

        if (answer.key) {
            if (!answers.hasOwnProperty(answer.key)) {
                answers[answer.key] = answer.value;
                labels[answer.key] = entry.labels || [];
            }
        }
    }, this);

    return {
        answers,
        labels
    };
};

/**
 * Verifies that custom evalutors are functions and come wrapped in an object.
 * Throws an error if the custom evaluator is not in the right format.
 *
 * @private
 * @param {Object} customEvaluators The object to be evaluated
 */
Cerebro.prototype._validateCustomEvaluators = function() {
    var customEvaluators = this._customEvaluators;
    var key;

    // since customEvaluators is optional, do nothing if it is null or undefined
    if (customEvaluators === null || typeof customEvaluators === 'undefined') {
        return;
    }

    // check if customEvaluators is an object or not
    if (customEvaluators !== Object(customEvaluators)) {
        throw new TypeError('customEvaluators should be an object, instead it\'s a ' + typeof customEvaluators);
    }

    // make sure that each property in customEvaluators contains a function
    for (key in customEvaluators) {
        if (customEvaluators.hasOwnProperty(key)) {
            if (typeof customEvaluators[key] !== 'function') {
                throw new TypeError('Property ' + key + ' is not a function in customEvaluators');
            }
        }
    }
};

module.exports = Cerebro;
