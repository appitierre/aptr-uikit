'use strict';

var React = require('react');
var FlatButton = require('../buttons/flatButton');
var StarRatingSelectedItem = require('./starRatingSelectedItem');
var StarRatingUnselectedItem = require('./starRatingUnselectedItem');

var StarRating = React.createClass({
	displayName: 'StarRating',


	getInitialState: function getInitialState() {
		return {
			hoveredItemNumber: null

		};
	},

	getItems: function getItems() {
		var total = this.props.total;
		var that = this;
		var value = this.state.hoveredItemNumber || this.props.value;

		return _.times(total, function (index) {

			var icon = "star-empty";
			var className = "";

			if (index + 1 <= value) {
				icon = "star";
			}

			/*if (index + 1 <= that.state.hoveredItemNumber) {
   	className = "star-rating-item-selected hover"
   } else {
   	className = "star-rating-item-selected"
   }*/

			return React.createElement(StarRatingSelectedItem, {
				className: className,
				itemNumber: index + 1,
				key: index,
				onClick: _.bind(function (itemNumber) {
					that.onButtonClick(itemNumber);
				}, that),
				icon: icon,
				onHover: _.bind(function (number) {
					that.onHover(number);
				}, that)
			});
		});
	},

	onHover: function onHover(number) {
		this.setState({
			hoveredItemNumber: number
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