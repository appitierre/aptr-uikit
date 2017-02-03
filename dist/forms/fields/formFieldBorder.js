'use strict';

var React = require('react');
var _ = require('lodash');
var registerType = require('../helpers').registerType;
var SketchPicker = require('react-color').SketchPicker;
var CssValue = require('../../cssValue/components/cssValue');
var Button = require('../../buttons/components/button');
var FlatButton = require('../../buttons/components/flatButton');
var FormFieldSelectOption = require('./formFieldSelectOption.js');

var options = [{
    "value": "none",
    "text": "none"
}, {
    "value": "hidden",
    "text": "hidden"
}, {
    "value": "dotted",
    "text": "dotted"
}, {
    "value": "dashed",
    "text": "dashed"
}, {
    "value": "solid",
    "text": "solid"
}, {
    "value": "double",
    "text": "double"
}, {
    "value": "groove",
    "text": "groove"
}, {
    "value": "ridge",
    "text": "ridge"
}, {
    "value": "inset",
    "text": "inset"
}, {
    "value": "outset",
    "text": "outset"
}, {
    "value": "initial",
    "text": "initial"
}, {
    "value": "inherit",
    "text": "inherit"
}];

var FormFieldBorder = React.createClass({
    displayName: 'FormFieldBorder',


    getInitialState: function getInitialState() {
        var state = this.convertValueToObject();
        state.isOpen = false;
        return state;
    },

    convertValueToObject: function convertValueToObject() {

        var state = {
            'width': '1px',
            'style': 'none',
            'color': '#000'
        };

        if (this.props.value) {
            var attributes = this.props.value.replace(/px/g, '').split(' ');

            state.width = parseInt(attributes[0]);
            state.style = attributes[1];
            state.color = attributes[2];
        }

        return state;
    },

    convertObjectToValue: function convertObjectToValue() {
        var cssValue = this.state.width + 'px ' + this.state.style + ' ' + this.state.color;

        return cssValue;
    },

    getPickerStyle: function getPickerStyle() {
        if (!this.state.color) {
            return {
                background: "repeating-linear-gradient(45deg, #F2F6F7, #F2F6F7 8px, #FAFDFF 8px, #FAFDFF 16px)"
            };
        }
        return {
            backgroundColor: this.state.color
        };
    },

    onWidthChange: function onWidthChange(value) {

        this.setState({
            width: value
        }, function () {
            this.updateField();
        });
    },

    onWidthIncrease: function onWidthIncrease(value) {

        this.setState({
            width: this.state.width + value
        }, function () {
            this.updateField();
        });
    },

    onWidthDecrease: function onWidthDecrease(value) {
        this.setState({
            width: this.state.width - value
        }, function () {
            this.updateField();
        });
    },

    onStyleChange: function onStyleChange(event) {
        var value = event.target.value;
        this.setState({
            style: value
        }, function () {
            this.updateField();
        });
    },

    onColorChange: function onColorChange(color) {
        var rgb = color.rgb;
        var value = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')';
        this.setState({ color: value });
    },

    onSaveColorClicked: function onSaveColorClicked(event) {
        event.preventDefault();
        this.setState({
            isOpen: false
        });
        this.updateField();
    },

    onPickerClicked: function onPickerClicked(event) {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    },

    onCloseColorClicked: function onCloseColorClicked(event) {
        event.preventDefault();
        this.setState({
            isOpen: false
        });
    },

    updateField: _.throttle(function () {
        var value = this.convertObjectToValue();
        this.props.updateField(value);
    }, 1200, { leading: false }),

    renderOptions: function renderOptions() {
        return _.map(options, function (option) {
            return React.createElement(FormFieldSelectOption, {
                key: option.value,
                option: option
            });
        }, this);
    },

    renderColorPopup: function renderColorPopup() {
        if (this.state.isOpen) {
            return React.createElement(
                'div',
                { className: 'form-color-picker-popup' },
                React.createElement(SketchPicker, {
                    ref: 'picker',
                    onChange: this.onColorChange,
                    color: this.state.color,
                    type: 'chrome' }),
                React.createElement(
                    'div',
                    { className: 'form-color-picker-popup-buttons' },
                    React.createElement(Button, { text: 'Save', type: 'primary', onClick: this.onSaveColorClicked }),
                    React.createElement(Button, { text: 'Close', type: 'primary', onClick: this.onCloseColorClicked })
                )
            );
        } else {
            return null;
        }
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
            React.createElement(CssValue, {
                unit: "px",
                onChange: this.onWidthChange,
                value: this.state.width,
                onIncrease: this.onWidthIncrease,
                onDecrease: this.onWidthDecrease
            }),
            React.createElement(
                'select',
                { value: this.state.style, onChange: this.onStyleChange },
                this.renderOptions()
            ),
            React.createElement(
                'div',
                { className: 'form-field-color-picker' },
                React.createElement(
                    'button',
                    {
                        className: 'form-field-color-picker-button',
                        onClick: this.onPickerClicked },
                    React.createElement('div', { className: 'form-field-color-picker-button-color', style: this.getPickerStyle() }),
                    React.createElement('i', { className: 'icon icon-eye-dropper' })
                ),
                this.renderColorPopup()
            ),
            React.createElement(
                'div',
                { className: 'form-field-error' },
                this.props.error
            )
        );
    }

});

registerType('Border', FormFieldBorder);

module.exports = FormFieldBorder;