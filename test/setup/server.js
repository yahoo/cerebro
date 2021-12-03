/* eslint-env mocha */

var chai = require('chai');
var sinonChai = require('sinon-chai');
var sinon = require('sinon');

chai.use(sinonChai);

beforeEach(function() {
    this.sandbox = sinon.createSandbox();
});

afterEach(function() {
    this.sandbox.restore();
});
