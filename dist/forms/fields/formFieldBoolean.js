'use strict';

var React = require('react');
var _ = require('lodash');
var registerType = require('../helpers').registerType;

var FormFieldBoolean = React.createClass({
    displayName: 'FormFieldBoolean',


    onChange: function onChange(event) {
        var value = event.target.checked;
        this.props.updateField(value);
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
            React.createElement('input', {
                id: this.props.fieldId,
                className: 'form-field-boolean-toggle',
                type: 'checkbox',
                checked: this.props.value || false,
                onChange: this.onChange,
                onBlur: this.props.onBlur,
                onFocus: this.props.onFocus
            }),
            React.createElement('label', { className: 'form-field-label', htmlFor: this.props.fieldId }),
            React.createElement(
                'div',
                { className: 'form-field-error' },
                this.props.error
            )
        );
    }

});

registerType('Boolean', FormFieldBoolean);

module.exports = FormFieldBoolean;