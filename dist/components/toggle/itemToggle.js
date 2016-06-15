'use strict';

var React = require('react');
var classNames = require('classnames');

var ItemToggle = React.createClass({
	displayName: 'ItemToggle',


	renderClassName: function renderClassName() {
		return classNames('forms-boolean-toggle', this.props.className);
	},

	onClick: function onClick(value) {
		this.props.onChange(value);
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement('input', { type: 'checkbox', id: 'man', className: 'forms-boolean-toggle', onClick: this.onClick }),
			React.createElement('label', { htmlFor: 'man' })
		);
	}

});

module.exports = ItemToggle;