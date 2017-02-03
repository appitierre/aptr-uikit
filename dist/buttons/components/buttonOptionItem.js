"use strict";

var React = require('react');

var ButtonOptionItem = React.createClass({
	displayName: "ButtonOptionItem",


	onClick: function onClick() {
		this.props.onClick(this.props.value);
	},

	renderBody: function renderBody() {
		return this.props.body;
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: "button-options-list-item", onClick: this.onClick },
			React.createElement(
				"div",
				{ className: "button-options-list-item-title" },
				this.props.text
			),
			React.createElement(
				"span",
				{ className: "button-options-list-item-body" },
				this.renderBody()
			)
		);
	}

});

module.exports = ButtonOptionItem;