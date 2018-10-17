/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

/*global describe, it, beforeEach */
/* eslint-disable no-unused-expressions */

var validate = require('../index.js'),
    expect = require('chai').expect;

beforeEach(function() {
    this.config = [{
        setting: 'settingA',
        value: true
    }, {
        setting: 'settingB',
        value: true,
        except: [{
            value: false,
            setting: 'settingA'
        }]
    }, {
        setting: 'settingC',
        value: true,
        except: [{
            value: false,
            setting: 'settingB'
        }]
    }];

    this.clientSchema = {};
});

describe('cross setting validation', function() {
    it('returns an error when a setting is not referenced before it is resolved', function() {
        var report;

        this.config[0].except = [{setting: 'settingC', value: false}];

        report = validate(this.clientSchema, this.config);

        expect(report.errors[0].message).to.equal('For settingA, your dependency `settingC` was referenced before it' +
        ' was resolved. Move the definition of it above settingA');
        expect(report.valid).to.be.false;
    });

    it('returns an error when there are circular references', function() {
        // with the current implementation, this should never fail.
        // but, just in case the implementation / assumptions change,
        // i'm writing this test.
        var report;

        this.config[1].except[0].setting = 'settingC';

        report = validate(this.clientSchema, this.config);

        expect(report.errors[0].message).to.equal('For settingB, your dependency `settingC` was referenced before it' +
        ' was resolved. Move the definition of it above settingB');
        expect(report.valid).to.be.false;
    });

    it('returns an error when the setting depends on itself', function() {
        var report;

        this.config[1].except[0].setting = 'settingB';

        report = validate(this.clientSchema, this.config);

        expect(report.errors[0].message).to.equal('Setting `settingB` depends on itself.');
        expect(report.valid).to.be.false;
    });

    it('does not return an error when the setting depends on an existing setting', function() {
        var report = validate(this.clientSchema, this.config);

        expect(report.valid).to.be.true;
    });
});
