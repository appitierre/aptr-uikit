'use strict';

var React = require('react');

var Card = React.createClass({
	displayName: 'Card',


	getClassName: function getClassName() {

		var className = 'card';

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
				{ className: 'card-inner' },
				this.props.children
			)
		);
	}

});

module.exports = Card;