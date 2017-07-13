/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

var Cerebro = require('../../../src/index.js'),
    configuration = require('../../fixtures/combined/combined.js'),
    cerebro = new Cerebro(configuration);

/**
 * A performance test that multiple dimensions in one setting
 */
module.exports = function() {
    var context = {
            farm: '123'
        },
        cerebroConfig = cerebro.resolveConfig(context);

    cerebroConfig.isEnabled('combined');
};
