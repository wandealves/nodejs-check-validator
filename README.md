# check-validator
Check validation for node.js

[![logo][logo-image]][logo-url]

[![build status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![npm downloads][downloads-image]][npm-url]

Check validator that enables validation on multiple parameters at once.

## Chained validation

### Example 

``` javascript
let CheckValidator = require('check-validator');
let validator =  new CheckValidator();

validator.hasMinLen('Hulk', 2, 'Value can not be less than 4 characters');

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

### Other

- **isEmail(value, message)** - check valid email

[logo-image]: http://res.cloudinary.com/tbking/image/upload/v1490803400/password-validator/logo.png
[logo-url]: http://tarunbatra.github.io/password-validator
[npm-image]: https://img.shields.io/npm/v/password-validator.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/password-validator
[travis-image]:https://img.shields.io/travis/tarunbatra/password-validator.svg?style=flat-square
[travis-url]:https://travis-ci.org/tarunbatra/password-validator
[downloads-image]: https://img.shields.io/npm/dt/password-validator.svg?style=flat-square