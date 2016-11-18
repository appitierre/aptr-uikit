'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var FormField = require('./formField.js');

var Form = React.createClass({
    displayName: 'Form',


    getInitialState: function getInitialState() {
        var form = _.mapKeys(this.props.schema, function (val, key) {
            return {
                hasError: false
            };
        });

        return form;
    },

    validateForm: function validateForm(newState) {
        var hasError = _.find(newState, function (field, fieldKey) {
            if (field.hasError) {
                return field.hasError;
            }
        });

        return hasError;
    },

    onUpdate: function onUpdate(attributes, hasError, fieldKey) {

        var newFieldObject = {};
        newFieldObject[fieldKey] = { hasError: hasError };

        var newState = _.extend(this.state, newFieldObject);

        this.setState(newState);
        var hasError = this.validateForm(newState);
        return this.props.onUpdate(attributes, hasError, fieldKey);
    },

    renderTitle: function renderTitle() {

        if (this.props.title) {
            return React.createElement(
                'div',
                { className: 'form-title' },
                this.props.title
            );
        }

        return null;
    },

    renderFields: function renderFields() {
        var _this = this;

        return _.map(this.props.schema, function (schemaItem, key) {
            var model = _this.props.model || {};
            var value = model[key];
            return React.createElement(FormField, _extends({
                key: key
            }, schemaItem, {
                fieldKey: key,
                value: value,
                model: _this.props.model,
                form: _this.props.form,
                onUpdate: _this.onUpdate
            }));
        });
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'form' },
            this.renderTitle(),
            this.renderFields()
        );
    }

});

module.exports = Form;