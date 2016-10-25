'use strict';

var React = require('react');
var classNames = require('classnames');

var ItemToggle = React.createClass({
	displayName: 'ItemToggle',


	renderClassName: function renderClassName() {
		return classNames('forms-boolean-toggle', this.props.className);
	},

	onChange: function onChange(event) {
		var checked = event.target.checked;
		this.props.onChange(checked);
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement('input', { type: 'checkbox', id: this.props.toggleId, className: 'forms-boolean-toggle', defaultChecked: this.props.initialValue, onChange: this.onChange }),
			React.createElement('label', { htmlFor: this.props.toggleId })
		);
	}

});

module.exports = ItemToggle;