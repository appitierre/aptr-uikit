'use strict';

var React = require('react');
var _ = require('lodash');
var registerType = require('../helpers').registerType;
var Form = require('../components/form.js');

var FormFieldObject = React.createClass({
    displayName: 'FormFieldObject',


    renderFormFields: function renderFormFields() {
        var value = this.props.value || {};

        return React.createElement(Form, {
            onUpdate: this.onUpdateField,
            schema: this.props.subSchema,
            model: value,
            form: this.props.form
        });
    },

    onUpdateField: function onUpdateField(attributes, hasError, fieldKey) {
        var value = this.props.value || {};
        var newValue = _.extend(value, attributes);
        return this.props.updateField(newValue, hasError);
    },

    render: function render() {

        return React.createElement(
            'div',
            { className: 'form-field form-field-object' },
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
            this.renderFormFields(),
            React.createElement(
                'div',
                { className: 'form-field-error' },
                this.props.error
            )
        );
    }

});

registerType('Object', FormFieldObject);

module.exports = FormFieldObject;