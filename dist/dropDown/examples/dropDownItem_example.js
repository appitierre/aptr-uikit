'use strict';

var React = require('react');

var DropDownItem = React.createClass({
	displayName: 'DropDownItem',


	render: function render() {
		return React.createElement(
			'button',
			{ onClick: this.props.closeDropDown },
			this.props.item.title
		);
	}

});

module.exports = DropDownItem;