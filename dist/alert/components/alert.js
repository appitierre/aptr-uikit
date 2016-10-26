'use strict';

var React = require('react');
var classNames = require('classnames');

var Alert = React.createClass({
	displayName: 'Alert',


	getClassName: function getClassName() {
		return classNames('alert', this.props.className, this.props.type);
	},

	getIconClassName: function getIconClassName() {
		return 'icon icon-' + this.props.icon;
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: this.getClassName() },
			React.createElement(
				'div',
				{ className: 'alert-inner' },
				React.createElement('i', { className: this.getIconClassName() }),
				React.createElement(
					'span',
					null,
					this.props.text
				)
			)
		);
	}
});

module.exports = Alert;