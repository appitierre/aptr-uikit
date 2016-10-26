"use strict";

var React = require('react');

var FormFieldCondition = React.createClass({
    displayName: "FormFieldCondition",


    render: function render() {

        if (!this.props.condition.text) {
            return null;
        }

        return React.createElement(
            "div",
            { className: "form-field" },
            React.createElement(
                "div",
                { className: "form-field-label" },
                this.props.label
            ),
            React.createElement(
                "div",
                { className: "form-field-help" },
                this.props.help
            ),
            React.createElement("div", { className: "form-field-condition", dangerouslySetInnerHTML: { __html: this.props.condition.text } })
        );
    }

});

module.exports = FormFieldCondition;