"use strict";

var React = require('react');

var DropDownOptions = React.createClass({
	displayName: "DropDownOptions",


	getItems: function getItems() {
		return _.map(this.props.options, function (item, index) {
			return React.createElement(
				"div",
				{ className: "drop-down-items" },
				item.text
			);
		});
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: "drop-down" },
			React.createElement("div", { className: "drop-down-selector" }),
			this.getItems()
		);
	}

});

module.exports = DropDownOptions;