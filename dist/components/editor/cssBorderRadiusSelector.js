'use strict';

var React = require('react');
var Button = require('../buttons/button');

var CssBorderRadiusSelector = React.createClass({
	displayName: 'CssBorderRadiusSelector',


	renderItems: function renderItems() {
		return React.createElement(
			'div',
			{ className: 'css-border-radius-selector' },
			React.createElement(
				'div',
				{ className: 'css-border-radius-selector-top' },
				React.createElement(Button, { className: 'css-border-radius-selector-top-left-button' }),
				React.createElement(Button, {
					className: 'css-border-radius-selector-top-right-button',
					type: 'primary',
					icon: 'star' })
			),
			React.createElement(
				'div',
				{ className: 'css-border-radius-selector-centre' },
				React.createElement(Button, null)
			),
			React.createElement(
				'div',
				{ className: 'css-border-radius-selector-bottom' },
				React.createElement(Button, null),
				React.createElement(Button, null)
			)
		);
	},

	render: function render() {
		return this.renderItems();
	}

});

module.exports = CssBorderRadiusSelector;