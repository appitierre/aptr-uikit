"use strict";

var React = require('react');
var CheckboxItemWrapper = React.createClass({
	displayName: "CheckboxItemWrapper",


	getItems: function getItems() {
		return React.createElement(
			"button",
			{ className: "checkbox-item-clickable", onClick: this.props.onClick },
			this.props.children
		);
	},

	render: function render() {
		return this.getItems();
	}

});

module.exports = CheckboxItemWrapper;