'use strict';

var React = require('react');

var FormFieldSelectOption = React.createClass({
    displayName: 'FormFieldSelectOption',


    render: function render() {
        return React.createElement(
            'option',
            { value: this.props.option.value },
            this.props.option.text
        );
    }

});

module.exports = FormFieldSelectOption;