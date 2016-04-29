"use strict";

var React = require('react');

// @PROPS
// {
//     title: String,
//     description: String,
//     children: React Components
// }

var Section = React.createClass({
    displayName: "Section",


    render: function render() {
        return React.createElement(
            "section",
            { className: this.props.className + " clearfix" },
            React.createElement(
                "div",
                { className: "col-1-1" },
                React.createElement(
                    "h2",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "div",
                    null,
                    this.props.description
                )
            ),
            React.createElement(
                "div",
                { className: "col-1-2" },
                this.props.children
            )
        );
    }

});

module.exports = Section;