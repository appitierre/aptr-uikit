'use strict';

var React = require('react');
var _ = require('lodash');
var registerType = require('../helpers').registerType;

var FormFieldNumber = React.createClass({
    displayName: 'FormFieldNumber',


    getInitialState: function getInitialState() {
        return {
            value: this.props.value
        };
    },

    onChange: function onChange(event) {

        this.setState({
            value: value
        });

        this.updateField();
    },

    updateField: _.debounce(function () {

        var value = parseInt(this.state.value);

        if (isNaN(value)) {
            value = 0;
        }
        this.props.updateField(value);
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
                type: 'number',
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

registerType('Number', FormFieldNumber);

module.exports = FormFieldNumber;