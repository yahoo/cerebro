/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

var Cerebro = require('../../../src/index.js'),
    configuration = require('../../fixtures/percentage/random.js'),
    cerebro = new Cerebro(configuration);

/**
 * A performance test that evaluates random percentages.
 */
module.exports = function() {
    var context = {},
        cerebroConfig = cerebro.resolveConfig(context);

    cerebroConfig.isEnabled('random');
};
