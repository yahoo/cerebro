/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

/* global module */
'use strict';

var CONDITION_TYPES = {
        ENUM: 'enum',
        CUSTOM_EVALUATOR: 'custom_evaluator',
        PRIMITIVE: 'primitive'
    },
    PROPS = {
        evaluator: 'evaluator'
    },
    RANGE_REGEX = /^(-?\d+)(\.{2,3})(-?\d+)$/;

module.exports = {
    /**
     * Evaluate one condition against provided test value.
     *
     * @param {} condition The rule that the test value must satisfy
     * @param {} testValue The data about the user that corresponds to the conditionValue.  If this
     *      testValue satisfies the condition, return TRUE.
     * @param {Object} customEvaluators Contains the names of evaluators as keys and the functions as values
     *
     * @return {Boolean} TRUE if it matches, FALSE if it doesn't.
     *
     * @example: returns true, because the provided farm is included in the list.
     * `evaluate('farm', ['123', '456', '789'], { farm: '123' });`
     */
    evaluate: function(condition, testValue, customEvaluators) {
        var type = this._getConditionType(condition);

        switch (type) {
        case CONDITION_TYPES.ENUM:
            return this._checkEnum(condition, testValue);
        case CONDITION_TYPES.CUSTOM_EVALUATOR:
            return this._checkCustomEvaluator(condition, testValue, customEvaluators);
        case CONDITION_TYPES.PRIMITIVE:
            return this._checkPrimitive(condition, testValue);
        default:
            throw new Error('Unrecognized except type: ' + type);
        }
    },

    /**
     * Identify the type of the rule that is provided in the except block.
     *
     * @param {} condition in an except block
     * @return {String} one of the CONDITION_TYPES
     */
    _getConditionType: function(condition) {
        // any array is treated as an enum
        if (Array.isArray(condition)) {
            return CONDITION_TYPES.ENUM;
        }

        /**
         * An object that contains the field `evaluator` signifies a custom evaluator.
         * It has the format:
         * {
         *      evaluator: {String}
         *      dimensionValue: {Any Type}
         * }
         */
        if (condition === Object(condition)) {
            if (condition.hasOwnProperty(PROPS.evaluator)) {
                return CONDITION_TYPES.CUSTOM_EVALUATOR;
            }
        }

        if (typeof condition === 'string' || typeof condition === 'number' || typeof condition === 'boolean') {
            return CONDITION_TYPES.PRIMITIVE;
        }

        throw new Error('Unknown type of context field: ' + condition);
    },

    /**
     * Check if primitive data types match.
     *
     * @param {Number, String, Boolean} condition The value of the condition
     * @param {Number, String, Boolean} testValue The value to check against the condition.
     *
     * @return {Boolean} TRUE if the values equal each other, FALSE if not.
     */
    _checkPrimitive: function(condition, testValue) {
        return condition === testValue;
    },

    /**
     * @example
     * the context object is { locale: 'en' }
     *
     * the configuration entry is
     *
     * except: [{
     *      enabled: false,
     *      locale: ['en', 'br']
     * }]
     *
     * The function will be evaluating a single enum context field of the except block against provided value in the
     * `context` object.
     *
     * @param {Array} condition The value of the condition
     * @param {} testValue The value to check against the condition.
     *                     This could be a single value or an array of any value type.
     *
     * @return {Boolean} TRUE if the context contains a valid value, FALSE if the context does not.
     */
    _checkEnum: function(condition, testValue) {
        // precondition: the passed-in condition is an array.
        var specialCondition = condition[0];

        // if the element in the array is 'all', then any value will cause the condition to be evaluated as true
        if (specialCondition === 'all') {
            if (typeof testValue !== 'undefined') {
                return true;
            }
        }

        // if the element in the array is 'none', then having NO value will cause the condition to be evaluated as false
        if (specialCondition === 'none') {
            if (typeof testValue === 'undefined') {
                return true;
            }
        }

        if (Array.isArray(testValue)) {
            // if the testValue is an array, then return true if any of the elements in testValue satisfy the condition
            return testValue.some(function(element) {
                return Boolean(condition.indexOf(element) > -1);
            });
        } else if (typeof testValue === 'number') {
            // If the testValue is a number, then it's possible that there is a range in the conditions.
            return condition.some(function(element) {
                // If the element is a string, then it must be a range or no match possible (type mismatch)
                if (typeof element === 'string') {
                    return this._checkRange(element, testValue);
                }

                return element === testValue;
            }, this);
        }
        // return true if the element is in testValue
        // this also handles the undefined case, because testValue will not be inside condition if it is undefined
        return Boolean(condition.indexOf(testValue) > -1);
    },

    /**
     * @example
     * the context object is { farm: 1201 }
     *
     * the configuration entry is
     * ```
     * except: [{
     *      enabled: false,
     *      farm: [9323, '1200-1205']
     * }]
     * ```
     * The function will evaluate a single range entry (element) against provided value from the
     * `context` object (testValue).  We determine if the number is in the range.  Both increasing
     * '1200..1205' and decreasing 'reversed') '1205..1200' are supported.
     * The range can be inclusive '..' or exclusive '...'.  Negative range endpoints are also supported.
     *
     * @param {string} element The integer range to check against.
     * @param {number} testValue The value to check against the condition.
     *
     * @return {Boolean} TRUE if the context contains a valid value that is in the given range,
     *                   FALSE if the context does not.
     */
    _checkRange: function(element, testValue) {
        var result, min, max, temp;

        if (typeof element !== 'string') {
            throw new Error('Expected a string type of element for range check: ' + element);
        }

        if (typeof testValue !== 'number' || isNaN(testValue)) {
            throw new Error('Expected a numerical type of context value for range check: ' + testValue);
        }

        result = element.match(RANGE_REGEX);

        if (result === null) {
            return false;
        }

        min = parseInt(result[1], 10);
        max = parseInt(result[3], 10);

        if (min <= max) {
            if (result[2] === '...') {
                // The test should be exclusive of the max value
                return testValue >= min && testValue < max;
            }
        } else {
            //  The range is reversed.  Swap min and max.
            temp = min;
            min = max;
            max = temp;

            if (result[2] === '...') {
                // The exclusive endpoint is the minimum in the reversed range and so the
                // test should be exclusive of the min value
                return testValue > min && testValue <= max;
            }
        }

        return testValue >= min && testValue <= max;
    },

    /**
     * Evaluate a context field against a custom evaluator.
     *
     * @param {Object} The value of the condition, containing:
     *     {String} evaluator, which maps to a function in customEvaluators
     *     {} dimensionValue, which is what the testValue is tested against in the custom evaluator
     * @param {} testValue The value to check against the condition.
     * @param {Object} customEvaluators Contains the names of evaluators as keys and the functions as values
     *      Basically, condition.evaluator should be the key to this object.
     *
     * @return {Boolean} TRUE if the custom evaluator passed, FALSE if the custom evaluator did not pass
     */
    _checkCustomEvaluator: function(condition, testValue, customEvaluators) {
        var evaluate = customEvaluators[condition.evaluator], // get the evaluate function
            dimensionValue = condition.dimensionValue;

        if (evaluate) {
            // Custom evaluators are supposed to return a boolean.
            // But, if they don't, coerce the value to a boolean.
            return Boolean(evaluate(dimensionValue, testValue));
        }

        return false; // the condition did not pass evaluation because there is no evaluator
    }
};
