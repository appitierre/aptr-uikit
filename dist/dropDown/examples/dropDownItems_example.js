'use strict';

var React = require('react');
var DropDownItem = require('./dropDownItem_example');
var items = [{
	title: 'One'
}, {
	title: 'Two'
}, {
	title: 'Three'
}];

var DropDownItems = React.createClass({
	displayName: 'DropDownItems',


	getItems: function getItems() {
		var _this = this;

		return _.map(items, function (item, index) {
			return React.createElement(DropDownItem, {
				key: index,
				closeDropDown: _this.props.closeDropDown,
				item: item
			});
		});
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			this.getItems()
		);
	}

});

module.exports = DropDownItems;