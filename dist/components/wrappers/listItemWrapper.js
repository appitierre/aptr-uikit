"use strict";

var React = require('react');

var ListItemWrapper = React.createClass({
	displayName: "ListItemWrapper",


	renderWrapper: function renderWrapper() {
		if (this.props.onClick && !this.props.buttons) {
			return React.createElement(
				"button",
				{ className: "list-item-clickable", onClick: this.props.onClick },
				React.createElement(
					"div",
					{ className: "list-item-inner clearfix" },
					this.props.children
				)
			);
		} else {
			return React.createElement(
				"div",
				{ className: "list-item-inner clearfix" },
				this.props.children
			);
		}
	},

	render: function render() {
		return this.renderWrapper();
	}
});

module.exports = ListItemWrapper;