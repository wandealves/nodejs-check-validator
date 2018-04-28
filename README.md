# check-validator
Check validation for node.js

[![build status][travis-image]][travis-url]

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

[npm-image]: https://www.npmjs.com/package/titan-check-validator
[npm-url]: https://www.npmjs.com/package/titan-check-validator
[travis-image]:https://img.shields.io/travis/tarunbatra/password-validator.svg?style=flat-square
