'use strict';

var React = require('react');

var ActionBar = React.createClass({
	displayName: 'ActionBar',


	getClassName: function getClassName() {
		return 'action-bar' + ' ' + this.props.className;
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: this.getClassName() },
			React.createElement(
				'div',
				{ className: 'action-bar-inner' },
				React.createElement(
					'div',
					{ className: 'action-bar-actions' },
					this.props.button,
					this.props.search
				)
			)
		);
	}

});

module.exports = ActionBar;