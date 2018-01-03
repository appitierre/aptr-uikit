"use strict";

var React = require('react');

var FormFieldPickerItem = React.createClass({
    displayName: "FormFieldPickerItem",


    onClick: function onClick(event) {
        event.preventDefault();
        this.props.onItemSelected(this.props.item.value);
    },

    renderImage: function renderImage() {
        if (this.props.item.image) {
            return React.createElement(
                "div",
                { className: "form-field-picker-image" },
                React.createElement("img", { src: this.props.item.image })
            );
        }
    },

    render: function render() {
        return React.createElement(
            "button",
            { className: "form-field-picker-item", onClick: this.onClick },
            this.renderImage(),
            React.createElement(
                "div",
                { className: "form-field-picker-text" },
                this.props.item.text
            )
        );
    }

});

module.exports = FormFieldPickerItem;