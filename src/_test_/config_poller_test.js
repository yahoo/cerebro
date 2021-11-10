/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const ConfigPoller = require('../config_poller');

require('../../test/setup/server');

describe('config_poller.js', function() {
    beforeEach(function() {
        this.clock = this.sandbox.useFakeTimers();
    });

    it('throws a TypeError when not receiving an interval', function() {
        expect(() => new ConfigPoller({
            fetch: () => Promise.resolve(true)
        })).to.throw(TypeError);
    });

    it('throws a TypeError when not receiving a fetch function', function() {
        expect(() => new ConfigPoller({
            interval: 5000
        })).to.throw(TypeError);
    });

    it('calls the fetch function on the interval', function() {
        const fetch = this.sandbox.stub().returns(Promise.resolve(1));
        const poller = new ConfigPoller({
            fetch,
            interval: 5000
        });

        poller.start();

        expect(fetch).not.to.have.been.called;

        this.clock.tick(5000);

        expect(fetch).to.have.been.calledOnce;
    });

    it('fires an error event when fetching goes wrong', function(done) {
        const poller = new ConfigPoller({
            fetch: function() {
                return Promise.reject(new Error('foo'));
            },
            interval: 5000
        });

        poller.on('error', error => {
            expect(error).to.be.instanceOf(Error);
            done();
        });

        poller.start();

        this.clock.tick(5000);
    });

    it('fires an error event when the response is empty', function(done) {
        const poller = new ConfigPoller({
            fetch: function() {
                return Promise.resolve('');
            },
            interval: 5000
        });

        poller.on('error', error => {
            expect(error).to.be.instanceOf(Error);
            done();
        });

        poller.start();

        this.clock.tick(5000);
    });

    it('fires an error event when the response fails the schema validation', function(done) {
        const clientSchema = {
            os: {
                type: 'array',
                minItems: 1,
                uniqueItems: true,
                items: {
                    type: 'string',
                    enum: [
                        'ios',
                        'android',
                        'windows',
                        'mac',
                        'other'
                    ]
                }
            }
        };
        const poller = new ConfigPoller({
            clientSchema,
            fetch: function() {
                return Promise.resolve([
                    {
                        setting: 'test',
                        value: true,
                        except: [{
                            value: false,
                            os: ['unknown os']
                        }]
                    }
                ]);
            },
            interval: 5000
        });

        poller.on('error', error => {
            expect(error).to.be.instanceOf(Error);
            done();
        });

        poller.start();

        this.clock.tick(5000);
    });

    it('fires an update event when fetching succeeds without a schema', function(done) {
        const poller = new ConfigPoller({
            fetch: function() {
                return Promise.resolve([]);
            },
            interval: 5000
        });

        poller.on('update', result => {
            expect(result).to.be.instanceOf(Array);
            done();
        });

        poller.start();

        this.clock.tick(5000);
    });

    it('fires an update event when fetching succeeds with a schema', function(done) {
        const clientSchema = {
            os: {
                type: 'array',
                minItems: 1,
                uniqueItems: true,
                items: {
                    type: 'string',
                    enum: [
                        'ios',
                        'android',
                        'windows',
                        'mac',
                        'other'
                    ]
                }
            }
        };
        const newConfig = [
            {
                setting: 'test',
                value: true,
                except: [{
                    value: false,
                    os: ['android']
                }]
            }
        ];
        const poller = new ConfigPoller({
            clientSchema,
            fetch: function() {
                return Promise.resolve(newConfig);
            },
            interval: 5000
        });

        poller.on('update', result => {
            expect(result).to.deep.equal(newConfig);
            done();
        });

        poller.start();

        this.clock.tick(5000);
    });
});
