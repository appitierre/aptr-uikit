'use strict';

var React = require('react');

var ActionBar = React.createClass({
	displayName: 'ActionBar',


	getClassName: function getClassName() {
		var className = 'action-bar';

		if (this.props.className) {
			className += ' ' + this.props.className;
		}

		return className;
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