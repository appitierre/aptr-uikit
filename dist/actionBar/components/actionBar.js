'use strict';

var React = require('react');
var classNames = require('classnames');

var ActionBar = React.createClass({
	displayName: 'ActionBar',


	getClassName: function getClassName() {
		return classNames('action-bar', this.props.className);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: this.getClassName() },
			React.createElement(
				'div',
				{ className: 'action-bar-inner clearfix' },
				this.props.children
			)
		);
	}

});

module.exports = ActionBar;