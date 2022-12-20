/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
var expect = require('chai').expect,
    Evaluator = require('../evaluator.js');

require('../../test/setup/server');

describe('evaluator.js', function() {
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
                answer = Evaluator.evaluate(this.entry, context, overrides);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.false;
        });
    });

    describe('setting', function() {
        beforeEach(function() {
            this.settingName = 'testFeature';

            this.entry = {
                setting: this.settingName,
                value: true,
                except: [
                    {
                        value: false,
                        setting: 'foo'
                    }
                ]
            };
        });

        it('returns the default answer if setting condition is not fulfilled', function() {
            var context = {},
                answers = { foo: false },
                overrides = {},
                answer = Evaluator.evaluate(this.entry, context, overrides, answers);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });

        it('returns the `except` answer if setting condition is fulfilled', function() {
            var context = {},
                answers = { foo: true },
                overrides = {},
                answer = Evaluator.evaluate(this.entry, context, overrides, answers);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.false;
        });
    });

    describe('settings array', function() {
        beforeEach(function() {
            this.settingName = 'testFeature';

            this.entry = {
                setting: this.settingName,
                value: true,
                except: [
                    {
                        value: false,
                        setting: ['foo', 'bar']
                    }
                ]
            };
        });

        it('returns the default answer if none of the settings conditions are fulfilled', function() {
            var context = {},
                answers = { foo: false, bar: false },
                overrides = {},
                answer = Evaluator.evaluate(this.entry, context, overrides, answers);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });

        it('returns the default answer if only some of the settings conditions are fulfilled', function() {
            var context = {},
                answers = { foo: false, bar: true },
                overrides = {},
                answer = Evaluator.evaluate(this.entry, context, overrides, answers);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });

        it('returns the `except` answer if all settings conditions are fulfilled', function() {
            var context = {},
                answers = { foo: true, bar: true },
                overrides = {},
                answer = Evaluator.evaluate(this.entry, context, overrides, answers);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.false;
        });
    });

    describe('custom evaluators', function() {
        beforeEach(function() {
            this.settingName = 'testSetting';
            this.entry = {
                setting: this.settingName,
                value: 3,
                except: [
                    {
                        customCondition: {
                            evaluator: 'evaluateCondition',
                            dimensionValue: 'en'
                        },
                        value: 45
                    }
                ]
            };

            this.customEvaluators = {
                evaluateCondition: function(condition, testValue) {
                    if (testValue.indexOf(condition) !== -1) {
                        return true;
                    }

                    return false;
                }
            };
        });

        it('returns the new answer if the custom evaluator returns true', function() {
            var context = {
                    customCondition: 'en-US'
                },
                answer;

            answer = Evaluator.evaluate(this.entry, context, {}, {}, this.customEvaluators);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.equal(45);
        });

        it('returns the default answer if the custom evaluator returns false', function() {
            var context = {
                    customCondition: 'no'
                },
                answer;

            answer = Evaluator.evaluate(this.entry, context, {}, {}, this.customEvaluators);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.equal(3);
        });

        it('returns the new answer when return value of the custom evaluator resolves to true', function() {
            var context = {
                    customCondition: 'en-US'
                },
                answer;

            this.customEvaluators = {
                evaluateCondition: function(condition, testValue) {
                    if (testValue.indexOf(condition) !== -1) {
                        return 'asdf';
                    }

                    return null;
                }
            };

            answer = Evaluator.evaluate(this.entry, context, {}, {}, this.customEvaluators);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.equal(45);
        });

        it('returns the default answer when return value of the custom evaluator resolves to false', function() {
            var context = {
                    customCondition: 'no'
                },
                answer;

            this.customEvaluators = {
                evaluateCondition: function(condition, testValue) {
                    if (testValue.indexOf(condition) !== -1) {
                        return 'asdf';
                    }

                    return null;
                }
            };

            answer = Evaluator.evaluate(this.entry, context, {}, {}, this.customEvaluators);

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.equal(3);
        });
    });

    describe('percentage conditions', function() {
        beforeEach(function() {
            this.settingName = 'percentageSetting';

            this.entry = {
                setting: this.settingName,
                value: false,
                except: [
                    {
                        value: true,
                        percentage: 2
                    }
                ]
            };
        });

        it('returns true if the calculated context percentage is within the given percentage', function() {
            var context = {
                    percentageSeed: '87625364382'
                },
                answer = Evaluator.evaluate(this.entry, context, {});

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });

        it('returns false if the calculated context percentage is outside of the given percentage', function() {
            var context = {
                    percentageSeed: '87625364385'
                },
                answer = Evaluator.evaluate(this.entry, context, {});

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.false;
        });

        it('returns true if the percentage is 100%', function() {
            var context = {
                    percentageSeed: '87625364385'
                },
                entry100 = {
                    setting: this.settingName,
                    value: false,
                    except: [
                        {
                            value: true,
                            percentage: 100
                        }
                    ]
                },
                answer = Evaluator.evaluate(entry100, context, {});

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });

        it('returns false if the percentage is 100%', function() {
            var context = {
                    percentageSeed: '87625364385'
                },
                entry100 = {
                    setting: this.settingName,
                    value: true,
                    except: [
                        {
                            value: false,
                            percentage: 100
                        }
                    ]
                },
                answer = Evaluator.evaluate(entry100, context, {});

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.false;
        });

        it('returns false if the percentage is 0%', function() {
            var context = {
                    percentageSeed: '87625364382'
                },
                entry0 = {
                    setting: this.settingName,
                    value: false,
                    except: [
                        {
                            value: true,
                            percentage: 0
                        }
                    ]
                },
                answer = Evaluator.evaluate(entry0, context, {});

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.false;
        });

        it('returns true if the percentage is 0%', function() {
            var context = {
                    percentageSeed: '87625364382'
                },
                entry0 = {
                    setting: this.settingName,
                    value: true,
                    except: [
                        {
                            value: false,
                            percentage: 0
                        }
                    ]
                },
                answer = Evaluator.evaluate(entry0, context, {});

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });

        it('throws an error if the percentageSeed property is not supplied', function() {
            var context = {},
                entry = {
                    setting: this.settingName,
                    value: true,
                    except: [
                        {
                            value: false,
                            percentage: 50
                        }
                    ]
                };

            expect(function() {
                Evaluator.evaluate(entry, context, {});
            }).to.throw(/The property `percentageSeed` must be set in the/);
        });

        it('returns true if the percentageSeed is passed as a number', function() {
            var context = {
                    percentageSeed: 87625364382
                },
                answer = Evaluator.evaluate(this.entry, context, {});

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });
    });

    //===================================

    describe('random percentage conditions', function() {
        beforeEach(function() {
            this.settingName = 'randomPercentageSetting';

            this.entry = {
                setting: this.settingName,
                value: false,
                except: [
                    {
                        value: true,
                        randomPercentage: 2
                    }
                ]
            };
        });

        it('returns true if the randomPercentage is within the given percentage', function() {
            var answer;

            // Override the random function so that we get reliable test results.
            this.sandbox.stub(Math, 'random').returns(0.019);

            answer = Evaluator.evaluate(this.entry, {}, {});
            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });

        it('returns false if the randomPercentage is outside of the given percentage', function() {
            var answer;

            // Override the random function so that we get reliable test results.
            this.sandbox.stub(Math, 'random').returns(0.8);

            answer = Evaluator.evaluate(this.entry, {}, {});
            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.false;
        });

        it('returns false if the randomPercentage is on the edge of the given percentage', function() {
            var answer;

            // Override the random function so that we get reliable test results.
            this.sandbox.stub(Math, 'random').returns(0.02);

            answer = Evaluator.evaluate(this.entry, {}, {});
            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.false;
        });

        it('returns true if the randomPercentage is just below the given percentage', function() {
            var answer;

            // Override the random function so that we get reliable test results.
            this.sandbox.stub(Math, 'random').returns(0.019999999999);

            answer = Evaluator.evaluate(this.entry, {}, {});
            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });

        it('returns true if the randomPercentage is 100%', function() {
            var entry100 = {
                    setting: this.settingName,
                    value: false,
                    except: [
                        {
                            value: true,
                            randomPercentage: 100
                        }
                    ]
                },
                answer = Evaluator.evaluate(entry100, {}, {});

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });

        it('returns false if the randomPercentage is 100%', function() {
            var entry100 = {
                    setting: this.settingName,
                    value: true,
                    except: [
                        {
                            value: false,
                            randomPercentage: 100
                        }
                    ]
                },
                answer = Evaluator.evaluate(entry100, {}, {});

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.false;
        });

        it('returns false if the randomPercentage is 0%', function() {
            var entry0 = {
                    setting: this.settingName,
                    value: false,
                    except: [
                        {
                            value: true,
                            randomPercentage: 0
                        }
                    ]
                },
                answer = Evaluator.evaluate(entry0, {}, {});

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.false;
        });

        it('returns true if the randomPercentage is 0%', function() {
            var entry0 = {
                    setting: this.settingName,
                    value: true,
                    except: [
                        {
                            value: false,
                            randomPercentage: 0
                        }
                    ]
                },
                answer = Evaluator.evaluate(entry0, {}, {});

            expect(answer.key).to.equal(this.settingName);
            expect(answer.value).to.be.true;
        });
    });

    describe('primitives', function() {
        beforeEach(function() {
            this.settingName = 'testSetting';
            this.settingEntry = {
                setting: this.settingName,
                value: 'default',
                except: [
                    {
                        value: 'testSetting',
                        dogfood: true
                    }
                ]
            };
        });

        it('compares a primitive', function() {
            var answer = Evaluator.evaluate(this.settingEntry, {
                dogfood: true
            });

            expect(answer.value).to.equal('testSetting');

            answer = Evaluator.evaluate(this.settingEntry, {
                dogfood: false
            });

            expect(answer.value).to.equal('default');
        });

        it('does not compare a non-primitive', function() {
            var settingName = 'testSetting',
                settingEntry = {
                    setting: settingName,
                    value: 'default',
                    except: [
                        {
                            value: 'testSetting',
                            dogfood: {}
                        }
                    ]
                };

            expect(function() {
                Evaluator.evaluate(settingEntry, {
                    dogfood: true
                });
            }).to.throw(/Unknown type of context field/);
        });
    });
});
