/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

/*global describe, it */
/* eslint-disable no-unused-expressions */

var helpers = require('../helpers.js'),
    expect = require('chai').expect;

describe('validator helpers', function() {
    describe('#isTemplate', function() {
        // this test ensures that nothing screwy happens with statefulness of regex
        it('always returns the same thing', function() {
            var template = '${var}',
                nonTemplate = '${var$2}';

            expect(helpers.isTemplate(template)).to.equal(true);
            expect(helpers.isTemplate(template)).to.equal(true);

            expect(helpers.isTemplate(nonTemplate)).to.equal(false);
            expect(helpers.isTemplate(nonTemplate)).to.equal(false);
            expect(helpers.isTemplate(nonTemplate)).to.equal(false);
        });

        it('accepts only template strings', function() {
            expect(helpers.isTemplate('https://${var}.com')).to.equal(true);
            expect(helpers.isTemplate('${var}')).to.equal(true);
            expect(helpers.isTemplate('${VAr}')).to.equal(true);
            expect(helpers.isTemplate('${vA}${vB}')).to.equal(true);

            expect(helpers.isTemplate(null)).to.equal(false);
            expect(helpers.isTemplate(undefined)).to.equal(false);
            expect(helpers.isTemplate({not: 'string'})).to.equal(false);
            expect(helpers.isTemplate('no_vars')).to.equal(false);
            expect(helpers.isTemplate('${}')).to.equal(false);
            expect(helpers.isTemplate('${v_a}')).to.equal(false);
        });
    });
});
