"use strict";

var React = require('react');

var FormFieldPickerItem = React.createClass({
    displayName: "FormFieldPickerItem",


    onClick: function onClick(event) {
        event.preventDefault();
        this.props.onItemSelected(this.props.item.value);
    },

    render: function render() {
        return React.createElement(
            "button",
            { className: "form-field-picker-item", onClick: this.onClick },
            React.createElement(
                "div",
                { className: "form-field-picker-image" },
                React.createElement("img", { src: this.props.item.image })
            ),
            React.createElement(
                "div",
                { className: "form-field-picker-text" },
                this.props.item.text
            )
        );
    }

});

module.exports = FormFieldPickerItem;