"use strict";

var React = require('react');

var ListItemWrapper = React.createClass({
	displayName: "ListItemWrapper",

	getAccessibilityTags: function getAccessibilityTags() {
		return {'tabIndex' : 0}
	},

	renderWrapper: function renderWrapper() {
		if (this.props.onClick && !this.props.buttons) {
			return React.createElement(
				"a",
				_.merge({ className: "list-item-clickable", onClick: this.props.onClick}, this.getAccessibilityTags()),
				React.createElement(
					"div",
					{ className: "list-item-inner clearfix" },
					this.props.children
				)
			);
		} else {
			return React.createElement(
				"div",
				_.merge({ className: "list-item-inner clearfix" }, this.getAccessibilityTags()),
				this.props.children
			);
		}
	},

	render: function render() {
		return this.renderWrapper();
	}
});

module.exports = ListItemWrapper;