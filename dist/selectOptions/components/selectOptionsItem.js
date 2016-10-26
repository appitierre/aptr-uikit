"use strict";

var React = require('react');

var SelectOptionsItem = React.createClass({
	displayName: "SelectOptionsItem",


	onOptionClicked: function onOptionClicked() {
		this.props.onClick(this.props.value);
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: "select-options-item", onClick: this.onOptionClicked },
			this.props.text
		);
	}

});

module.exports = SelectOptionsItem;