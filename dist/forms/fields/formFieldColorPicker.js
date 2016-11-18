'use strict';

var React = require('react');
var registerType = require('../helpers').registerType;
var SketchPicker = require('react-color').SketchPicker;
var Button = require('../../buttons/components/button');
var FlatButton = require('../../buttons/components/flatButton');

var FormFieldColorPicker = React.createClass({
    displayName: 'FormFieldColorPicker',


    getInitialState: function getInitialState() {
        return {
            value: this.props.value,
            isOpen: false
        };
    },

    getPickerStyle: function getPickerStyle() {
        if (!this.state.value) {
            return {
                background: "repeating-linear-gradient(45deg, #F2F6F7, #F2F6F7 8px, #FAFDFF 8px, #FAFDFF 16px)"
            };
        }
        return {
            backgroundColor: this.state.value
        };
    },

    onChange: function onChange(color) {
        var rgb = color.rgb;
        var value = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')';
        this.setState({ value: value });
    },

    onSaveClicked: function onSaveClicked(event) {
        event.preventDefault();
        this.setState({
            isOpen: false
        });
        this.props.updateField(this.state.value);
    },

    onPickerClicked: function onPickerClicked(event) {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    },

    onCloseClicked: function onCloseClicked(event) {
        event.preventDefault();
        this.setState({
            isOpen: false
        });
    },

    renderColorPopup: function renderColorPopup() {
        if (this.state.isOpen) {
            return React.createElement(
                'div',
                { className: 'form-color-picker-popup' },
                React.createElement(SketchPicker, {
                    ref: 'picker',
                    onChange: this.onChange,
                    color: this.state.value,
                    type: 'chrome' }),
                React.createElement(
                    'div',
                    { className: 'form-color-picker-popup-buttons' },
                    React.createElement(Button, { text: 'Save', type: 'primary', onClick: this.onSaveClicked }),
                    React.createElement(Button, { text: 'Close', type: 'primary', onClick: this.onCloseClicked })
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

registerType('ColorPicker', FormFieldColorPicker);

module.exports = FormFieldColorPicker;