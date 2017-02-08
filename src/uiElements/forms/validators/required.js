var registerValidator = require('../helpers').registerValidator;

var required = function(model, attribute, value) {
    if (value.length || (typeof value === 'number' && (value % 1) === 0)) {
        return false;
    } else {
        return "This field is required";
    }
}

registerValidator('required', required);

module.exports = required;