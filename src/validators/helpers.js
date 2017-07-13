/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

var TEMPLATE_REGEX = /\${[a-z]+}/gi;

/**
 * Indicated whether the value is a template string
 * there may be further constraints on its "validity" for Cerebro, which are not imposed here
 *
 * @param  {*}  value
 * @return {Boolean}
 */
function isTemplate(value) {
    var matches;

    if (typeof value === 'string') {
        matches = value.match(TEMPLATE_REGEX);

        return !!matches && matches.length > 0;
    }

    return false;
}

module.exports = {
    TEMPLATE_REGEX: TEMPLATE_REGEX,
    isTemplate: isTemplate
};
