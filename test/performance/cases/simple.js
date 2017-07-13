/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

var Cerebro = require('../../../src/index.js'),
    configuration = require('../../fixtures/simple/enabled.js'),
    cerebro = new Cerebro(configuration);

/**
 * A simple performance test with one boolean setting and one non-boolean setting
 */
module.exports = function() {
    var context = {},
        cerebroConfig = cerebro.resolveConfig(context);

    cerebroConfig.getValue('enabled');
};
