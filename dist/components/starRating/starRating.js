'use strict';

var React = require('react');
var FlatButton = require('../buttons/flatButton');
var StarRatingSelectedItem = require('./starRatingSelectedItem');
var StarRatingUnselectedItem = require('./starRatingUnselectedItem');

var StarRating = React.createClass({
	displayName: 'StarRating',


	getItems: function getItems() {
		var total = this.props.total;
		var that = this;

		return _.times(total, function (index) {
			if (index + 1 <= that.props.value) {
				return React.createElement(StarRatingSelectedItem, {
					itemNumber: index + 1,
					key: index,
					onClick: _.bind(function (itemNumber) {
						that.onButtonClick(itemNumber);
					}, that)
				});
			} else {
				return React.createElement(StarRatingUnselectedItem, {
					itemNumber: index + 1,
					key: index,
					onClick: _.bind(function (itemNumber) {
						that.onButtonClick(itemNumber);
					}, that)
				});
			}
		});
	},

	onButtonClick: function onButtonClick(itemNumber) {
		this.props.onChange(itemNumber);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'star-rating' },
			this.getItems()
		);
	}

});

module.exports = StarRating;