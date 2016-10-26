'use strict';

var _uiElements = require('uiElements');

var React = require('react');


var FormFieldSpacingItem = React.createClass({
    displayName: 'FormFieldSpacingItem',


    getInitialState: function getInitialState() {
        return {
            value: this.props.value
        };
    },

    onChange: function onChange(value) {

        this.setState({
            value: value || 0
        }, function () {
            this.updateField();
        });
    },

    onIncrease: function onIncrease(value) {
        this.setState({
            value: this.state.value + (value || 0)
        }, function () {
            this.updateField();
        });
    },

    onDecrease: function onDecrease(value) {
        this.setState({
            value: this.state.value - (value || 0)
        }, function () {
            this.updateField();
        });
    },

    updateField: function updateField() {
        var updateObject = {};
        updateObject[this.props.position] = this.state.value;
        this.props.onChange(updateObject);
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'form-field-label' },
                this.props.label
            ),
            React.createElement(_uiElements.CssValue, {
                unit: 'px',
                value: this.state.value,
                onChange: this.onChange,
                onIncrease: this.onIncrease,
                onDecrease: this.onDecrease
            })
        );
    }

});

module.exports = FormFieldSpacingItem;