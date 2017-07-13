/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

var Cerebro = require('../../../src/index.js'),
    configuration = require('../../fixtures/percentage/fixed.js'),
    cerebro = new Cerebro(configuration);

/**
 * A performance test that evaluates fixed percentages.
 */
module.exports = function() {
    var context = {
            percentageSeed: 435754932
        },
        cerebroConfig = cerebro.resolveConfig(context);

    cerebroConfig.isEnabled('fixed');
};
