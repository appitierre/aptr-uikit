'use strict';

var React = require('react');
var classNames = require('classnames');

var Card = React.createClass({
	displayName: 'Card',


	getClassName: function getClassName() {
		return classNames('card', this.props.className);
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