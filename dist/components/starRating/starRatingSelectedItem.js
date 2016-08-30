'use strict';

var React = require('react');
var FlatButton = require('../buttons/flatButton');

var StarRatingSelectedItem = React.createClass({
	displayName: 'StarRatingSelectedItem',


	onButtonClick: function onButtonClick() {
		this.props.onClick(this.props.itemNumber);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'star-rating-item' },
			React.createElement(FlatButton, {
				icon: 'star',
				className: 'star-rating-item-selected',
				type: 'secondary',
				onClick: this.onButtonClick })
		);
	}

});

module.exports = StarRatingSelectedItem;