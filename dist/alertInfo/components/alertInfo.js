'use strict';

var React = require('react');
var classNames = require('classnames');

var AlertInfo = React.createClass({
	displayName: 'AlertInfo',


	getClassName: function getClassName() {
		if (!this.props.icon) {
			return classNames('alert-info no-icon' + ' ' + this.props.type);
		} else {
			return classNames('alert-info' + ' ' + this.props.type);
		}
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
				{ className: 'alert-info-inner' },
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

module.exports = AlertInfo;