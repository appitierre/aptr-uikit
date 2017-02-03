'use strict';

var React = require('react');
var AccordionItem = require('./accordionItem');

var Accordion = React.createClass({
	displayName: 'Accordion',


	getItems: function getItems() {
		var _this = this;

		return _.map(this.props.items, function (item, index) {
			var iconSelected = _this.props.icon;

			if (_this.props.iconSelected) {
				iconSelected = _this.props.iconSelected;
			};

			return React.createElement(AccordionItem, {
				item: item,
				id: index,
				icon: _this.props.icon,
				iconSelected: iconSelected,
				onChange: _this.props.onChange,
				key: item._id
			});
		});
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'accordion' },
			this.getItems()
		);
	}

});

module.exports = Accordion;