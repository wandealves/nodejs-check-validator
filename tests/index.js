let CheckValidator = require('../lib/index');
var assert = require('assert');

describe('Check Validator', function () {
    let validator;
    describe('hasMinLen', function () {
        it('Value can not be less than 4 characters', function () {
            validator = new CheckValidator();
            validator.hasMinLen('tes', 4, 'Value can not be less than 4 characters');
            if (!validator.isValid()) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });
    describe('hasMaxLen', function () {
        it('Value can not be longer than 5 characters', function () {
            validator = new CheckValidator();
            validator.hasMaxLen('test case', 5, 'Value can not be longer than 4 characters');
            if (!validator.isValid()) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });
    describe('isFixedLen', function () {
        it('Number of different characters', function () {
            validator = new CheckValidator();
            validator.isFixedLen('test', 3, 'Number of different characters');
            if (!validator.isValid()) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });
    describe('isEmail', function () {
        it('Invalid email', function () {
            validator = new CheckValidator();
            validator.isEmail('test&email.com', 'Invalid email');
            if (!validator.isValid()) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });
    describe('isRequired', function () {
        it('Not reported', function () {
            validator = new CheckValidator();
            validator.isRequired(null, 'Not reported');
            if (!validator.isValid()) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });
});