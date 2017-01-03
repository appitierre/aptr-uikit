'use strict';

var React = require('react');
var _ = require('lodash');
var registerType = require('../helpers').registerType;

var FormFieldPassword = React.createClass({
    displayName: 'FormFieldPassword',


    getInitialState: function getInitialState() {
        return {
            value: this.props.value || ''
        };
    },

    onChange: function onChange(event) {
        var value = event.target.value;

        this.setState({
            value: value
        });

        this.updateField();
    },

    updateField: _.debounce(function () {
        this.props.updateField(this.state.value);
    }, 1200, { leading: false }),

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
                id: this.props.fieldKey,
                className: 'form-field-input',
                type: 'password',
                value: this.state.value,
                onChange: this.onChange,
                onBlur: this.props.onBlur,
                onFocus: this.props.onFocus
            }),
            React.createElement(
                'div',
                { className: 'form-field-error' },
                this.props.error
            )
        );
    }

});

registerType('Password', FormFieldPassword);

module.exports = FormFieldPassword;