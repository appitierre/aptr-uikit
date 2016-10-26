'use strict';

var React = require('react');
var registerType = require('../helpers').registerType;

var FormFieldTextAreaPlain = React.createClass({
    displayName: 'FormFieldTextAreaPlain',


    getInitialState: function getInitialState() {
        return {
            value: this.props.value || ''
        };
    },

    onChange: function onChange(event) {
        var value = event.target.value;
        var that = this;

        this.setState({
            value: value
        });

        this.updateField();
    },

    updateField: _.throttle(function () {
        this.props.updateField(this.state.value);
    }, 1200, { leading: false }),

    render: function render() {

        return React.createElement(
            'div',
            { className: 'form-field' },
            React.createElement(
                'label',
                { className: 'form-field-label', htmlFor: this.props.fieldKey },
                this.props.label
            ),
            React.createElement(
                'div',
                { className: 'form-field-help' },
                this.props.help
            ),
            React.createElement('textarea', {
                id: this.props.fieldKey,
                className: 'form-field-input',
                type: 'text',
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

registerType('TextArea:Plain', FormFieldTextAreaPlain);

module.exports = FormFieldTextAreaPlain;