/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

/*global describe, it, beforeEach */
/* eslint-disable no-unused-expressions */

var validate = require('../index.js'),
    expect = require('chai').expect;

describe('schema validation', function() {
    describe('key validation', function() {
        beforeEach(function() {
            this.data = [{
                setting: 'setting',
                value: true
            }];

            this.clientSchema = {};
        });

        it('returns an error when there is an invalid key', function() {
            var report;

            this.data[0].invalid = true;
            report = validate(this.clientSchema, this.data);

            expect(report.errors.length).to.equal(1);
            expect(report.errors[0]).to.match(/Unknown property/);
            expect(report.missing.length).to.equal(0);
            expect(report.valid).to.be.false;
        });

        it('returns an error when `setting` does not exist', function() {
            var report;

            delete this.data[0].setting;
            report = validate(this.clientSchema, this.data);

            expect(report.errors.length).to.equal(1);
            expect(report.errors[0]).to.match(/Missing required property/);
            expect(report.missing.length).to.equal(0);
            expect(report.valid).to.be.false;
        });

        it('returns an error when `value` does not exist', function() {
            var report;

            delete this.data[0].value;
            report = validate(this.clientSchema, this.data);

            expect(report.errors.length).to.equal(1);
            expect(report.errors[0]).to.match(/Missing required property/);
            expect(report.missing.length).to.equal(0);
            expect(report.valid).to.be.false;
        });
    });

    describe('`setting` type checks', function() {
        beforeEach(function() {
            this.data = [{
                setting: 'setting',
                value: true
            }];

            this.clientSchema = {};
        });

        it('returns an error when `setting` is not a string', function() {
            [true, 42, {}, [], null, undefined].forEach(function(value) {
                var report;

                this.data[0].setting = value;

                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
            }, this);
        });

        it('does not return an error when `setting` is a string', function() {
            var report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.true;
        });
    });

    describe('`value` type checks', function() {
        beforeEach(function() {
            this.data = [{
                setting: 'setting',
                value: true
            }];

            this.clientSchema = {};
        });

        it('does not return an error when `value` is not null or undefined', function() {
            [true, 42, {}, [], 'string'].forEach(function(value) {
                var report;

                this.data[0].value = value;

                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.true;
            }, this);
        });

        it('returns an error when `value` is null or undefined', function() {
            [null, undefined].forEach(function(value) {
                var report;

                this.data[0].value = value;

                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
            }, this);
        });
    });

    describe('`except` type checks', function() {
        beforeEach(function() {
            this.data = [{
                setting: 'setting',
                value: true,
                except: []
            }];

            this.clientSchema = {};
        });

        it('returns an error when `except` is not an array', function() {
            [true, 42, {}, 'string', null, undefined].forEach(function(value) {
                var report;

                this.data[0].except = value;

                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
            }, this);
        });

        it('does not return an error when `except` is an array', function() {
            var report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.true;
        });

        it('does not return an error when `except` does not exist', function() {
            var report;

            delete this.data[0].except;
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;
        });

        it('returns an error when there is no `value` inside an `except`', function() {
            var report;

            this.data[0].except.push({});
            report = validate(this.clientSchema, this.data);

            expect(report.errors.length).to.equal(1);
            expect(report.errors[0]).to.match(/Missing required property/);
            expect(report.missing.length).to.equal(0);
            expect(report.valid).to.be.false;
        });

        it('does not return an error if there is a `value` inside an `except`', function() {
            var report;

            this.data[0].except.push({
                value: 'asdf'
            });

            report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.true;
        });

        it('does not return an error if `value` is an object inside an `except`', function() {
            var report;

            this.data[0].except.push({
                value: {
                    hello: 'world'
                }
            });

            report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.true;
        });

        it('returns an error if there is a null `value` inside an `except`', function() {
            var report;

            this.data[0].except.push({
                value: null
            });

            report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.false;
        });


        it('does not return an error if there is a `percentage` inside an `except`', function() {
            var report;

            this.data[0].except.push({
                value: true,
                percentage: 25
            });

            report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.true;
        });

        it('returns an error if there is a non-numerical `percentage` inside an `except`', function() {
            var report;

            this.data[0].except.push({
                value: true,
                percentage: 'abcd'
            });

            report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.false;
        });

        it('returns an error if there is a `percentage` that is too big inside an `except`', function() {
            var report;

            this.data[0].except.push({
                value: true,
                percentage: 110
            });

            report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.false;
        });

        it('returns an error if there is a `percentage` that is too small inside an `except`', function() {
            var report;

            this.data[0].except.push({
                value: true,
                percentage: -25
            });

            report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.false;
        });

        it('does not return an error if there is a `randomPercentage` inside an `except`', function() {
            var report;

            this.data[0].except.push({
                value: true,
                randomPercentage: 25
            });

            report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.true;
        });

        it('returns an error if there is a `randomPercentage` that is too big inside an `except`', function() {
            var report;

            this.data[0].except.push({
                value: true,
                randomPercentage: 110
            });

            report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.false;
        });

        it('returns an error if there is a `randomPercentage` that is too big inside an `except`', function() {
            var report;

            this.data[0].except.push({
                value: true,
                randomPercentage: 110
            });

            report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.false;
        });

        it('returns an error if there is a `randomPercentage` that is too small inside an `except`', function() {
            var report;

            this.data[0].except.push({
                value: true,
                randomPercentage: -25
            });

            report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.false;
        });
    });

    describe('client schema', function() {
        it('respects the client schema', function() {
            var data = [{
                    setting: 'convReplyBucket',
                    value: false,
                    except: [
                        {
                            value: true,
                            buckets: ['CMUSCVRT']
                        }
                    ]
                }],
                clientSchema = {
                    buckets: {
                        type: 'array',
                        minItems: 1,
                        uniqueItems: true,
                        items: {
                            enum: ['CMUSCVRT1', 'CMUSCVRT3']
                        }
                    }
                },
                report = validate(clientSchema, data);

            expect(report.errors.length).to.equal(1);
            expect(report.valid).to.be.false;
        });

        it('passes validation', function() {
            var clientSchema = require('./fixtures/settings/client_schema.json'),
                data = require('./fixtures/settings/settings.json'),
                report;

            report = validate(clientSchema, data);

            expect(report.errors.length).to.equal(0);
            expect(report.missing.length).to.equal(0);
            expect(report.valid).to.be.true;
        });
    });

    describe('valueType check', function() {
        beforeEach(function() {
            this.data = [{
                setting: 'testSetting',
                valueType: 'string',
                value: 'sample string'
            }];

            this.clientSchema = {};
        });

        it('does not return an error when `valueType` is a string', function() {
            var report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.true;
        });

        it('returns an error when `value` is not a string', function() {
            [true, 42, {}, []].forEach(function(val) {
                var report,
                    expectedValType = Array.isArray(val) ? 'array' : typeof val;

                this.data[0].value = val;

                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
                expect(report.errors[0].message).to.equal('Value `' + JSON.stringify(val) +
                    '` was expected to be of type string, but it is type ' + expectedValType);
            }, this);
        });

        it('does not return an error when `valueType` is a number', function() {
            var report;

            this.data[0].valueType = 'number';
            this.data[0].value = -42;
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;
        });

        it('returns an error when `value` is not a number', function() {
            [true, 'abc', {}, []].forEach(function(val) {
                var report;

                this.data[0].valueType = 'number';
                this.data[0].value = val;

                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
            }, this);
        });

        it('does not return an error when `valueType` is a boolean', function() {
            var report;

            this.data[0].valueType = 'boolean';
            this.data[0].value = true;
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;
        });

        it('returns an error when `value` is not a boolean', function() {
            ['abc', 42, {}, []].forEach(function(val) {
                var report;

                this.data[0].valueType = 'boolean';
                this.data[0].value = val;

                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
            }, this);
        });

        it('does not return an error when `valueType` is a object', function() {
            var report;

            this.data[0].valueType = 'object';
            this.data[0].value = {
                obj: 'something'
            };
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;
        });

        it('returns an error when `value` is not a object', function() {
            [true, 'abc', 42, []].forEach(function(val) {
                var report;

                this.data[0].valueType = 'object';
                this.data[0].value = val;
                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
            }, this);
        });
        it('does not return an error when `valueType` is an array', function() {
            var report;

            this.data[0].valueType = 'array';
            this.data[0].value = ['abc', 31];
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;
        });

        it('returns an error when `value` is not an array', function() {
            [true, 'abc', 42, {}].forEach(function(val) {
                var report;

                this.data[0].valueType = 'array';
                this.data[0].value = val;
                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
            }, this);
        });

        it('does not return an error when `valueType` is a uint', function() {
            var report;

            this.data[0].valueType = 'uint';
            this.data[0].value = 42;
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;
        });

        it('returns an error when `value` is not a uint', function() {
            [true, 'abc', {}, []].forEach(function(val) {
                var report;

                this.data[0].valueType = 'uint';
                this.data[0].value = val;
                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
            }, this);
        });

        it('does not return an error when `valueType` is a validurl', function() {
            var report;

            this.data[0].valueType = 'url';
            this.data[0].value = 'https://www.tumblr.com/share/';
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;

            this.data[0].value = 'https://www.example.com/foo/?bar=baz&inga=42&quux';
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;

            this.data[0].value = 'http://✪df.ws/123';
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;

            this.data[0].value = 'https://142.42.1.1:8000/?q=Test%20URL-encoded%20stuff';
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;

            this.data[0].value = 'http://उदाहरण.परीक्षा';
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;
        });

        it('returns an error when `valueType` is an invalid url', function() {
            var report;

            this.data[0].valueType = 'url';
            this.data[0].value = 'http://-error-.invalid/';
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.false;

            this.data[0].value = 'http:// shouldfail.com';
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.false;

            this.data[0].value = 'https://foo.bar?q=Spaces should be encoded';
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.false;

            this.data[0].value = 'https://.www.foo.bar./';
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.false;
        });

        it('returns an error when `value` is not a url', function() {
            [true, 'abc', 42, {}, []].forEach(function(val) {
                var report;

                this.data[0].valueType = 'url';
                this.data[0].value = val;
                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
            }, this);
        });

        it('does not return an error when `valueType` is an external email', function() {
            var report;

            this.data[0].valueType = 'email';
            this.data[0].value = 'me@example.org';
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;
        });

        it('does not return an error when `valueType` is a regular expression', function() {
            var report;

            this.data[0].valueType = {
                regex: '^[a-z]+\\s\\d+$'
            };

            this.data[0].value = 'asdf 42';
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;
        });

        it('returns an error when `value` does not match the regular expression', function() {
            [true, 'abc', 42, {}, []].forEach(function(val) {
                var report;

                this.data[0].valueType = {
                    regex: '^[a-z]+\\s\\d+$'
                };
                this.data[0].value = val;
                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
                expect(report.errors[0].message).to.match(/The regular expression .+ failed to validate the value/);
            }, this);
        });

        it('return an error when `valueType` case sensitive regular expression', function() {
            var report;

            this.data[0].valueType = {
                regex: '^[a-z]+\\s\\d+$'
            };

            this.data[0].value = 'AsDf 42';
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.false;
            expect(report.errors[0].message).to.match(/The regular expression .+ failed to validate the value/);
        });

        it('returns an error when `value` does not match the regular expression', function() {
            [true, 'abc', 42, {}, []].forEach(function(val) {
                var report;

                this.data[0].valueType = {
                    regex: '^[a-z]+\\s\\d+$'
                };
                this.data[0].value = val;
                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
                expect(report.errors[0].message).to.match(/The regular expression .+ failed to validate the value/);
            }, this);
        });

        it('succeeds when `valueType` is a case insensitive regular expression', function() {
            var report;

            this.data[0].valueType = {
                iregex: '^[a-z]+\\s\\d+$'
            };

            this.data[0].value = 'ASDF 42';
            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;
        });

        it('returns an error when `value` does not match the case insensitive regular expression', function() {
            [true, 'abc', 42, {}, []].forEach(function(val) {
                var report;

                this.data[0].valueType = {
                    iregex: '^[a-z]+\\s\\d+$'
                };
                this.data[0].value = val;
                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
                expect(report.errors[0].message).to.match(/The regular expression .+ failed to validate the value/);
            }, this);
        });

        it('returns an error when the valueType is unknown', function() {
            var report;

            this.data[0].valueType = 'abc';

            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.false;
        });

        it('returns an error when an object is not a known valueType', function() {
            var report;

            this.data[0].valueType = {
                abc: 'allthethings!'
            };

            report = validate({}, this.data);
            expect(report.valid).to.be.false;
            expect(report.errors[0].message).to.equal('The object valueType `{\"abc\":\"allthethings!\"}` is' +
                                                      ' not a known or supported type');
        });
    });

    describe('valueType except-block check', function() {
        beforeEach(function() {
            this.data = [{
                setting: 'testSetting',
                valueType: 'string',
                value: 'sample string',
                except: [{
                    value: 'A different string',
                    farms: [9323]
                }]
            }];

            this.clientSchema = require('./fixtures/settings/client_schema.json');
        });

        it('does not return an error when except-block `value` is a string', function() {
            var report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.true;
        });

        it('returns an error when except-block `value` is not a string', function() {
            [true, 42, {}, []].forEach(function(val) {
                var report;

                this.data[0].except[0].value = val;

                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
            }, this);
        });

    });

    describe('valueType second except-block check', function() {
        beforeEach(function() {
            this.data = [{
                setting: 'testSetting',
                valueType: 'string',
                value: 'sample string',
                except: [{
                    value: 'A different string',
                    farms: [9323]
                },
                {
                    value: 'A second string',
                    farms: [9323]
                }]
            }];

            this.clientSchema = require('./fixtures/settings/client_schema.json');
        });

        it('does not return an error when all `values` are strings', function() {
            var report;

            report = validate(this.clientSchema, this.data);
            expect(report.valid).to.be.true;
        });

        it('returns an error when a second except `value` is not a string', function() {
            [true, 42, {}, []].forEach(function(val) {
                var report;

                this.data[0].except[1].value = val;

                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
            }, this);
        });
    });

    describe('feature dependency check', function() {
        beforeEach(function() {
            this.data = [{
                setting: 'someFeature',
                value: false
            }, {
                setting: 'setting',
                value: false,
                except: []
            }];

            this.clientSchema = {};
        });

        it('does not return an error when `setting` is a string', function() {
            var report;

            this.data[1].except.push({
                value: true,
                setting: 'someFeature'
            });

            report = validate(this.clientSchema, this.data);

            expect(report.valid).to.be.true;
        });

        it('returns an error when `setting` is not a string', function() {
            this.data[1].except.push({
                value: true
            });

            [true, 42, {}, []].forEach(function(valType) {
                var report;

                this.data[1].except[0].setting = valType;

                report = validate(this.clientSchema, this.data);
                expect(report.valid).to.be.false;
            }, this);
        });
    });
});
