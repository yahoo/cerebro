/* eslint-disable no-console */
const events = require('events');
const os = require('os');
const validate = require('./validators');

const EventEmitter = events.EventEmitter;

class ConfigPoller extends EventEmitter {
    constructor(options = {}) {
        super();

        if (!options.interval || typeof options.interval !== 'number') {
            throw new TypeError('Expected options.interval to be a number but got a ' + typeof options.interval);
        }

        if (typeof options.fetch !== 'function') {
            throw new TypeError('Expected options.poller to be an async function but got a ' + typeof options.poller);
        }

        this.interval = options.interval;
        this.fetch = options.fetch;
        this.clientSchema = options.clientSchema;
    }

    start() {
        setInterval(() => this.poll(), this.interval);
    }

    poll() {
        this.fetch().then(result => {
            if (!result) {
                throw new Error('Unexpected empty configuration');
            }

            if (this.clientSchema) {
                const validationReport = validate(this.clientSchema, result);

                if (!validationReport.valid) {
                    throw new Error('Invalid configuration received: ' + validationReport.errors.join(os.EOL));
                }
            }

            this.emit('update', result);
        }).catch(error => {
            this.emit('error', error);
        });

    }
}

module.exports = ConfigPoller;
