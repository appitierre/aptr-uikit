"use strict";

var React = require('react');

var ListItem = React.createClass({
	displayName: "ListItem",


	getItems: function getItems() {
		return _.map(this.props.items, function (item) {
			return React.createElement(
				"div",
				null,
				item.title,
				item.body
			);
		});
	},

	render: function render() {
		console.log(this.props);
		return React.createElement(
			"div",
			{ className: "list-item" },
			this.getItems()
		);
	}

});

module.exports = ListItem;