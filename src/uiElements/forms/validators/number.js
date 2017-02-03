'use strict';

var registerValidator = require('../helpers').registerValidator;

var number = function (model, attribute, value) {
    if (!isNaN(value)) {
        return false;
    } else {
        return "This field must be a number";
    }
};

registerValidator('number', number);

module.exports = number;