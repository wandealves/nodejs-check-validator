# check-validator
Check validation for node.js

[![build status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]

Check validator that enables validation on multiple parameters at once.

## Instalation and usage

### Instalation

```
npm i check-validator
```

### Bic usagase

```
let CheckValidator = require('check-validator');
let validator =  new CheckValidator();

validator.hasMinLen('Hulk', 2, 'Value cannot be less than 4 characters');

if (!validator.isValid()){
	try {
		throw new Error('Invalid');
	} catch (e) {
		console.log(e);
	}
}
```
## Simple validation

Validation without chaining.

## Validations

List of available validations.

### String

- **hasMinLen(value, text)** (value, min, message) - check if value is less than the parameter min informed
- **hasMaxLen(value, max, message)** - check if value is bigger than the parameter max informed
- **isFixedLen(value, len, message)** - check if value is different than the parameter len informed
- **isRequired(value, message)** - check if value is required
- **isString(value, message)** - Determines if a reference is a `String`.

### Email

- **isEmail(value, message)** - check valid email

### Other

- **isUndefined(value, message)** - Determines if a reference is undefined.
- **isDefined(value, message)** - Determines if a reference is defined.
- **isDate(value, message)** - Determines if a value is a date.
- **isArray(value, message)** - Determines if a reference is an Array. Alias of Array.isArray.


## Props and Methods

| Method/Prop | Desc | Test | Status | async |
|---|---|---|---|
| errors | Return a list of errors | OK | Ready | NO |
| clear () | Clear the error list | OK | Ready | NO |
| isValid () | verify the validity | OK | Ready | NO |
| isRequired (val, message) |  | OK | Ready | NO |
| isString (val, message) |  | OK | Ready | NO |
| hasMinLen (val, min, message) |   | OK | Ready  | NO |
| hasMaxLen (val, max, message) |   | OK | Ready | NO |
| isFixedLen (val, len, message) |   | OK | Ready  | NO |
| isEmail (email, message) |   | OK |  Ready | NO |
| isUndefined (value, message |   | OK |  Ready | NO |
| isDate (value, message) |   | OK |  Ready | NO |
| isArray (value, message) |   | OK |  Ready | NO |

[npm-image]: https://img.shields.io/npm/v/password-validator.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/check-validator
[travis-image]:https://img.shields.io/travis/tarunbatra/password-validator.svg?style=flat-square
[travis-url]:https://travis-ci.org/tarunbatra/check-validator