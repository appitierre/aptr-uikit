'use strict';

var React = require('react');
var FlatButton = require('../../buttons/components/flatButton');

var StarRatingUnselectedItem = React.createClass({
	displayName: 'StarRatingUnselectedItem',


	onButtonClick: function onButtonClick() {
		this.props.onClick(this.props.itemNumber);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'star-rating-item'},
			React.createElement(FlatButton, {
				name: 'Unselected star',
				icon: 'star-empty',
				className: 'star-rating-item-unselected',
				onClick: this.onButtonClick })
		);
	}

});

module.exports = StarRatingUnselectedItem;