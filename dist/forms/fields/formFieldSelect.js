'use strict';

var React = require('react');
var _ = require('lodash');
var registerType = require('../helpers').registerType;
var FormFieldSelectOption = require('./formFieldSelectOption.js');

var FormFieldSelect = React.createClass({
    displayName: 'FormFieldSelect',


    onChange: function onChange(event) {
        var value = event.target.value;
        this.props.updateField(value);
    },

    renderOptions: function renderOptions() {
        return _.map(this.props.options, function (option) {
            return React.createElement(FormFieldSelectOption, {
                key: option.value,
                option: option
            });
        });
    },

    render: function render() {

        return React.createElement(
            'div',
            { className: 'form-field' },
            React.createElement(
                'div',
                { className: 'form-field-label' },
                this.props.label
            ),
            React.createElement(
                'div',
                { className: 'form-field-help' },
                this.props.help
            ),
            React.createElement(
                'select',
                { value: this.props.value, onChange: this.onChange },
                this.renderOptions()
            ),
            React.createElement('label', { className: 'form-field-label', htmlFor: this.props.fieldKey }),
            React.createElement(
                'div',
                { className: 'form-field-error' },
                this.props.error
            )
        );
    }

});

registerType('Select', FormFieldSelect);

module.exports = FormFieldSelect;