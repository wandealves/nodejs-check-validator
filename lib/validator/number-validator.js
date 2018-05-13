/**
 * @ngdoc function
 * @name isNumber
 * @kind function
 *
 * @description
 * Determines if a reference is a `Number`.
 *
 * @param {*} value Reference to check.
 * @param {*} message Validation message.
 * @param {*} errors Errors.
 */
exports.isNumber = (value, message, errors) => {
    if (typeof value !== 'number') {
        errors.push({
            message: message
        });
    }
};