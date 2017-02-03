'use strict';

var React = require('react');
var Button = require('../../buttons/components/button');

var AccordionItem = React.createClass({
	displayName: 'AccordionItem',


	getTitle: function getTitle() {
		var icon = this.props.icon;

		if (this.props.item._isSelected) {
			icon = this.props.iconSelected;
		};

		return React.createElement(Button, {
			className: 'accordion-item-title',
			text: this.props.item.title,
			icon: icon,
			onClick: this.onClick,
			type: 'primary full-width'
		});
	},

	getBody: function getBody() {
		if (this.props.item._isSelected === true) {
			return React.createElement(
				'div',
				{ className: 'accordion-item-body' },
				React.createElement(
					'div',
					{ className: 'accordion-item-body-inner' },
					this.props.item.body
				)
			);
		}
	},

	onClick: function onClick() {
		this.props.onChange(this.props.item);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'accordion-item' },
			this.getTitle(),
			this.getBody()
		);
	}

});

module.exports = AccordionItem;