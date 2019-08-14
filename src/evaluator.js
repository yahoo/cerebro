/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

/*global module, require */

'use strict';

var Condition = require('./condition.js'),
    Evaluator,
    crc32 = require('buffer-crc32'),
    template = require('lodash.template'),
    isTemplate = require('./validators/helpers.js').isTemplate;

/**
 * Definition of terms:
 *
 * Entry
 * ------------
 * The object to be evaluated.  Entries have the following schema:
 *
 * {
 *     setting: 'acb',
 *     value: 1,
 *     except: [{
 *         value: 2,
 *         locale: ['en', 'uk']
 *     }]
 * }
 *
 *
 * Except
 * ------------
 * Every entry contains at least one except block.  Here's what an except block looks like:
 * `{
 *      value: 111,
 *      lang: ['en', 'us'],
 *      farm: [1111, 2222]
 * }`
 *
 * Every except block must contain an answer and at least one condition.  In the above example, the except block
 * contains an answer (the value) and two conditions (lang and farm).
 *
 *
 * Answer
 * ------------
 * Either `enabled` or `value`.  Every entry contains a default answer, which is specified at the top level
 * of an entry.  However, based on the conditions in the except block and the context given by the user,
 * the answer may change.
 *
 *
 * Condition
 * ------------
 * Conditions are used to evaluate whether to change the default answer or not.  The context passed in by the
 * user may or may not meet the conditions.  All conditions must be met to change the default answer.
 *
 *
 * Context
 * ------------
 * The data passed in by the user.  It is used to determine whether the conditions of except blocks are satisfied.
 * The keys of the context object must be the same as the conditions it is trying to fulfill.
 */
Evaluator = {
    /** This allows the evaluator to make optimizations on each rule */
    prepareEntry: function(configEntry) {
        if (configEntry.except) {
            configEntry.except.forEach(function(ex) {
                if (isTemplate(ex.value)) {
                    // compile the template upfront to reduce unnecessary work later
                    ex._compiledTemplate = template(ex.value);
                }
            });
        }

        return configEntry;
    },

    /**
     * @param {Object} entry Setting object
     *
     *  {
     *      setting: 'acb',
     *      value: 1,
     *      except: [{
     *          value: 2,
     *          locale: ['en', 'uk']
     *      }]
     *  }
     *
     * @param {Object} context Contextual data about the user
     * @param {Object} overrides Any specific overrides of the config for the user
     * @param {Object} answers An object containing the resolved answers.
     * @param {Object} customEvaluators Any custom evaluators for the config
     * @return {} The answer for the entry
     */
    evaluate: function(entry, context, overrides, answers, customEvaluators) {
        var i,
            exceptBlock,
            options = {context: context},
            customEvals = customEvaluators || {};

        // if the user passes in anything that overrides a particular setting, use it first
        if (overrides && overrides.hasOwnProperty(entry.setting)) {
            options.overrides = overrides;

            return this._getAnswer(entry, null, options);
        }

        if (entry.except) {
            for (i = 0; i < entry.except.length; i++) {
                exceptBlock = entry.except[i];

                /**
                 * If all conditions are satisfied, return the value provided by this except block.
                 * There may be multiple except blocks in this entry, but we return the answer of
                 * the first except block that the user satisfies all the conditions for.
                 */
                if (this._evaluateExceptBlock(entry, exceptBlock, context, answers, customEvals)) {
                    return this._getAnswer(entry, exceptBlock, options);
                }
            }
        }

        /**
         * If the user did not satisfy the conditions for any of the except blocks,
         * and/or if there was no except block present, return the default answer.
         */
        return this._getAnswer(entry, null, options);
    },

    /**
     * Checks whether the context satisfies ALL conditions of the given except block.
     * @param {Object} entry Setting.  Required because we need to know the name of the setting.
     * @param {Object} exceptBlock
     * `{
     *      value: 111,
     *      lang: ['en', 'us'],
     *      farm: [1111, 2222]
     * }`
     * @param {Object} context Contextual data about the user
     * @param {Object} answers An object containing the resolved answers.
     * @param {Object} customEvaluators Any custom evaluators for the config
     * @return {Boolean} TRUE if ALL conditions match, FALSE if ANY of the conditions fail.
     */
    _evaluateExceptBlock: function(entry, exceptBlock, context, answers, customEvaluators) {
        var conditionNames = Object.keys(exceptBlock),
            _this = this;

        return conditionNames.every(function(conditionName) {
            var conditionValue = exceptBlock[conditionName],
                testValue = context[conditionName],
                percentile;

            if (conditionName === 'value' || conditionName === '_compiledTemplate') {
                // don't evaluate internal names
                return true;
            }

            if (conditionName === 'setting') {
                // check what the existing setting has been resolved to.
                // we have a precondition that settings must be resolved before they are evaluated,
                // so we can do a simple check here.

                if (Array.isArray(conditionValue)) {
                    // like setting, but for each and every setting in the conditionValue array
                    // useful for ANDing settings (whereas ORing can be accomplished with multiple exception blocks)
                    return conditionValue.every(cv => Boolean(answers[cv]));
                }

                return Boolean(answers[conditionValue]);
            }

            if (conditionName === 'percentage') {
                return _this._evaluatePercentage(entry.setting, context, conditionValue);
            }

            if (conditionName === 'randomPercentage') {
                percentile = Math.random() * 100;

                return (percentile >= 0 && percentile < conditionValue);
            }

            return Condition.evaluate(conditionValue, testValue, customEvaluators);
        });
    },

    /**
     * For the definiton of what an answer is, please refer to the `Definition of Terms` at the top of the file.
     *
     * @param {Object} entry Setting.  Required because we need to know the name of the setting.
     * @param {Object} [Optional] exceptBlock If an except block is passed, that means we want to get the answer from it
     *      We have to pass in the entry along with the exceptBlock because the exceptBlock does not contain the
     *      name of the setting.
     * @return {Object} An object that contains both the name and the value of the setting in this format:
     * ```
     * {
     *     key: name of the setting
     *     value: value of the setting
     * }
     * ```
     * It is returned in this format for the ease of use by the caller.
     */
    _getAnswer: function(entry, exceptBlock, options) {
        var block = exceptBlock || entry;
        var overrideValue;

        if (!options) {
            options = {};
        }

        if (options.overrides) {
            overrideValue = options.overrides[entry.setting];

            /*
             * If the original value is a boolean, then preserve it.
             * A common use case for cerebro is to override a boolean setting
             * with a number.  Imagine the case where the user enters a
             * number, 0 or 1, instead of true or false for a query parameter.
             * This type inconsistency can lead to validation errors in the
             * application, because a module may receive a number when it is
             * expecting a boolean.
             */
            if (typeof block.value === 'boolean') {
                overrideValue = Boolean(overrideValue);
            }

            return {
                key: entry.setting,
                value: overrideValue
            };
        } else if (block._compiledTemplate) {
            return {
                key: entry.setting,
                value: block._compiledTemplate(options.context)
            };
        }

        return {
            key: entry.setting, // name of the setting
            value: block.value // answer, value
        };
    },

    /**
     * Evaluates a percentage condition and returns true if the percentage is less than the
     * requested 'qualifiedPercentage'.
     *
     * We require a context value 'percentageSeed' to be supplied in order to personalize
     * the percentage crc calculation.  'percentageSeed' can be either a string or a number.
     * The implementor should select a value for 'percentageSeed' that is unique for the user.
     *
     * @param {string} settingName The entry setting name.  Required because we need to know the name of the setting.
     * @param {Object} context Contextual data about the user
     * @param {number} qualifiedPercentage The percentage that we should qualify (return true).
     */
    _evaluatePercentage: function(settingName, context, qualifiedPercentage) {
        var calculatedCrc,
            percentile,
            percentageSeed;

        // We require a context value 'percentageSeed' to be supplied in order to personalize
        // the percentage crc calculation.  'percentageSeed' can be either a string or a number.
        // The implementor should select a value for 'percentageSeed' that is unique for the user.
        percentageSeed = context.percentageSeed;
        // If percentageSeed is not passed in, then we consider the condition to have failed
        if (typeof percentageSeed !== 'string' && typeof percentageSeed !== 'number') {
            throw new Error('The property `percentageSeed` must be set in the context ' +
                            'in order for the percentage to be calculated');
        }

        //  If percentageSeed is a number, then transform it into a string.
        if (typeof percentageSeed === 'number') {
            percentageSeed = percentageSeed.toString();
        }

        // Explanation of the crc percentage formula:
        //
        // We take the 'percentageSeed' string and concatenate
        // the entry setting name of the given condition in order to randomize the results
        // across settings.  We then calculate the crc32 of the entire string.
        // We want an accuracy of 0.001%, so we mod the string to
        // remove all the high digits  (we keep the 5 lower digits), then divide by 1000 so that it
        // is a percentage between 0 and 100%.
        calculatedCrc = crc32(percentageSeed + settingName);
        percentile = (crc32.unsigned(calculatedCrc) % 100000) / 1000;

        return (percentile >= 0 && percentile < qualifiedPercentage);
    }
};

module.exports = Evaluator;
