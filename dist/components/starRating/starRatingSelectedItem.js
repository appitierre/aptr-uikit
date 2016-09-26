'use strict';

var React = require('react');
var FlatButton = require('../buttons/flatButton');

var StarRatingSelectedItem = React.createClass({
	displayName: 'StarRatingSelectedItem',


	onButtonClick: function onButtonClick() {
		this.props.onClick(this.props.itemNumber);
	},

	onMouseEnter: function onMouseEnter() {
		this.props.onHover(this.props.itemNumber);
	},

	onMouseLeave: function onMouseLeave() {
		this.props.onHover(null);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'star-rating-item', onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave },
			React.createElement(FlatButton, {
				icon: this.props.icon,
				className: this.props.className,
				type: 'secondary',
				onClick: this.onButtonClick })
		);
	}

});

module.exports = StarRatingSelectedItem;