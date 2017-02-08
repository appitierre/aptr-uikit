'use strict';

var registerValidator = require('../helpers').registerValidator;

var number = function number(model, attribute, value) {
    if (typeof value === 'number' && value % 1 === 0) {
        return false;
    } else {
        return "This field must be a number";
    }
};

registerValidator('number', number);

module.exports = number;