'use strict';

var React = require('react');
var classNames = require('classnames');

var ListItems = React.createClass({
	displayName: 'ListItems',


	getClassName: function getClassName() {
		return classNames('list-items', this.shouldShowAlternativeColors(), this.props.className);
	},

	shouldShowAlternativeColors: function shouldShowAlternativeColors() {
		if (this.props.shouldShowAlternativeColors === true) {
			return " list-items-alternative-colors";
		}
	},

	render: function render() {
		return React.createElement(
			'ul',
			{ className: this.getClassName() },
			this.props.items
		);
	}

});

module.exports = ListItems;