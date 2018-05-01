let CheckValidator = require('../lib/index');
var assert = require('assert');

describe('Check Validator', function () {
    let validator;
    describe('function hasMinLen', function () {
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
    describe('function hasMaxLen', function () {
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
    describe('function isFixedLen', function () {
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
    describe('function isEmail', function () {
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
    describe('function isRequired', function () {
        it('Not reported', function () {
            validator = new CheckValidator();
            validator.isRequired('', 'Not reported');
            if (!validator.isValid()) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });

    describe('function isUndefined', function () {
        it('Is undefined', function () {
            validator = new CheckValidator();
            let value;
            validator.isUndefined(value, 'is undefined');
            if (!validator.isValid()) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });

    describe('function isDate', function () {
        it("t's not a date", function () {
            validator = new CheckValidator();
            let value = {};
            validator.isDate(value, "t's not a date");
            if (!validator.isValid()) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });

    describe('function isArray', function () {
        it("t's not a array", function () {
            validator = new CheckValidator();
            let value = {};
            validator.isArray(value, "t's not a array");
            if (!validator.isValid()) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });
    describe('function isString', function () {
        it("t's not a string", function () {
            validator = new CheckValidator();
            validator.isString(100, "t's not a string");
            if (!validator.isValid()) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });
    describe('function isRequired and isEmail', function () {
        it('Not reported and inalid email', function () {
            validator = new CheckValidator();
            validator.isRequired('', 'Not reported');
            validator.isEmail('email$email.com','Invalid email');
            if (!validator.isValid()) {
                assert.ok(true);
            } else {
                assert.ok(false);
            }
        });
    });
});