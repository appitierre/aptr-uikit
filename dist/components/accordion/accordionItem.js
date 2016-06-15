'use strict';

var React = require('react');
var classNames = require('classnames');
var Button = require('../buttons/button');

var AccordionItem = React.createClass({
	displayName: 'AccordionItem',


	getInitialState: function getInitialState() {
		return {
			_isVisible: false
		};
	},

	renderClassName: function renderClassName() {
		return classNames('accordion-item', this.props.className);
	},

	renderContent: function renderContent() {
		if (this.state._isVisible === false) {
			return React.createElement(
				'div',
				{ className: 'accordion-item-content' },
				this.props.content
			);
		}
	},

	renderIcon: function renderIcon() {
		if (this.state._isVisible) {
			return 'plus';
		} else {
			return 'minus';
		}
	},

	onClick: function onClick() {
		if (this.props.onClick) {
			this.props.onClick();
		}

		this.setState({
			_isVisible: !this.state._isVisible
		});
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: this.renderClassName() },
			React.createElement(Button, {
				icon: this.renderIcon(),
				className: 'accordion-item-title',
				text: this.props.itemTitle,
				type: 'full-width primary',
				onClick: this.onClick }),
			this.renderContent()
		);
	}

});

module.exports = AccordionItem;