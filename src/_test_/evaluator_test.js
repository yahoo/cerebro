/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

var expect = require('chai').expect,
    Evaluator = require('../evaluator.js'),
    Condition = require('../condition.js'); // stubbing a method on this

require('../../test/setup/server');

describe('evaluator.js', function() {
    describe('#prepareEntry', function() {
        it('precompiles templates', function() {
            var entry = {
                setting: 'setting',
                value: 3,
                except: [
                    {
                        value: 'farm/${farm}',
                        farm: ['123']
                    },
                    {
                        value: 'colo/${colo}',
                        colo: ['all']
                    }
                ]
            };

            var prepared = Evaluator.prepareEntry(entry);

            expect(prepared.except[0]).to.have.property('_compiledTemplate');
            expect(prepared.except[0]._compiledTemplate({farm: '123'})).to.equal('farm/123');
            expect(prepared.except[1]).to.have.property('_compiledTemplate');
            expect(prepared.except[1]._compiledTemplate({colo: 'gq1'})).to.equal('colo/gq1');
        });
    });

    describe('cross setting dependencies', function() {
        beforeEach(function() {
            this.settingName = 'testSettingB';

            this.answers = {
                testSettingA: false
            };

            this.entry = {
                setting: this.settingName,
                value: 3,
                except: [
                    {
                        setting: 'testSettingA',
                        value: 45
                    }
                ]
            };
        });

        it('returns the default answer if the setting is disabled', function() {
            var answer = Evaluator.evaluate(this.entry, {}, {}, this.answers);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.equal(3);
        });

        it('returns the except answer if the setting is enabled', function() {
            var answer;

            this.answers.testSettingA = true;

            answer = Evaluator.evaluate(this.entry, {}, {}, this.answers);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.equal(45);
        });
    });

    describe('overrides', function() {
        beforeEach(function() {
            this.settingName = 'testSetting';
            this.entry = {
                setting: this.settingName,
                value: 3,
                except: [
                    {
                        farm: ['1234'],
                        value: 45
                    }
                ]
            };
        });

        it('overrides the setting if overrides are provided', function() {
            var context = {
                    farm: '1234'
                },
                overrides = {
                    testSetting: 54
                },
                answer;

            this.sandbox.stub(Condition, 'evaluate').returns(false);

            answer = Evaluator.evaluate(this.entry, context, overrides);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.equal(54);
        });

        it('coerces a value to boolean if the original setting is boolean', function() {
            var entry = {
                    setting: this.settingName,
                    value: true,
                    except: [
                        {
                            farm: ['1234'],
                            value: false
                        }
                    ]
                },
                overrides = {
                    testSetting: 0
                },
                answer;

            this.sandbox.stub(Condition, 'evaluate').returns(true);

            answer = Evaluator.evaluate(entry, context, overrides);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.equal(false);
        });
    });

    describe('multiple conditions', function() {
        beforeEach(function() {
            this.settingName = 'testFeature';
            this.entry = {
                setting: this.settingName,
                value: true,
                except: [
                    {
                        value: false,
                        farm: ['111', '222'],
                        option: ['a', 'b']
                    }
                ]
            };
        });

        it('returns the default answer if all conditions are not fulfilled', function() {
            var context = {
                    farm: '111',
                    option: 'c'
                },
                overrides = {},
                answer;

            this.sandbox.stub(Condition, 'evaluate').returns(false);

            answer = Evaluator.evaluate(this.entry, context, overrides);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });

        it('returns the `except` answer if all conditions are fulfilled', function() {
            var context = {
                    farm: '111',
                    option: 'b'
                },
                overrides = {},
                answer;

            this.sandbox.stub(Condition, 'evaluate').returns(true);

            answer = Evaluator.evaluate(this.entry, context, overrides);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.false;
        });
    });

    describe('field existence', function() {
        beforeEach(function() {
            this.settingName = 'testSetting';
            this.entry = {
                setting: this.settingName,
                value: true,
                except: [
                    {
                        value: false,
                        options: ['a', 'b']
                    }
                ]
            };
        });

        it('returns the default answer if the context does not contain the value for a condition', function() {
            var context = {},
                overrides = {},
                answer;

            this.sandbox.stub(Condition, 'evaluate').returns(false);

            answer = Evaluator.evaluate(this.entry, context, overrides);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });

        it('returns the default answer if the except block is undefined', function() {
            var context = {},
                overrides = {},
                answer;

            delete this.entry.except;

            this.sandbox.stub(Condition, 'evaluate').returns(true);

            answer = Evaluator.evaluate(this.entry, context, overrides);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });
    });

    describe('answers', function() {
        it('returns `value` when setting is passed', function() {
            var settingName = 'testSetting',
                settingEntry = {
                    setting: settingName,
                    value: 'default',
                    except: [
                        {
                            value: 'testSetting',
                            // this normally wouldn't exist, but just to make sure that our program
                            // picks the right one, we'll do this
                            enabled: false,
                            option: ['a', 'b']
                        }
                    ]
                },
                context = {
                    option: 'b'
                },
                overrides = {},
                answer;

            this.sandbox.stub(Condition, 'evaluate').returns(true);

            answer = Evaluator.evaluate(settingEntry, context, overrides);

            expect(answer.key).to.equal(settingName);
            expect(answer.value).to.equal('testSetting');
        });
    });

    describe('percentage', function() {
        beforeEach(function() {
            this.settingName = 'testSetting';
            this.settingEntry = {
                setting: this.settingName,
                value: 'default',
                except: [
                    {
                        value: 'testSetting',
                        percentage: 20
                    }
                ]
            };
        });

        it('passes a string seed and calls the range condition with the correct values', function() {
            var context = {
                    percentageSeed: '87625364383'
                },
                answer = Evaluator.evaluate(this.settingEntry, context);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.equal('testSetting');
        });

        it('passes a number seed and calls the range condition with the correct values', function() {
            var context = {
                    percentageSeed: 87625364383
                },
                answer = Evaluator.evaluate(this.settingEntry, context);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.equal('testSetting');
        });

        it('throws an error if percentageSeed is not set in the context', function() {
            var _this = this,
                conditionStub = this.sandbox.stub(Condition, 'evaluate').returns(true);

            expect(function() {
                Evaluator.evaluate(_this.settingEntry, {});
            }).to.throw(/The property `percentageSeed` must be set in the/);
            expect(conditionStub.calledOnce).to.be.false;
        });
    });

    describe('random percentage', function() {
        it('calls the range condition with the correct values', function() {
            var settingName = 'testSetting',
                settingEntry = {
                    setting: settingName,
                    value: 'default',
                    except: [
                        {
                            value: 'testSetting',
                            randomPercentage: 20
                        }
                    ]
                },
                answer;

            this.sandbox.stub(Math, 'random').returns(0.19);
            answer = Evaluator.evaluate(settingEntry, {});
            expect(answer.key).to.equal(settingName);
            expect(answer.value).to.equal('testSetting');
        });
    });
});
