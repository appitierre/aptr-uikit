'use strict';

var React = require('react');
var FlatButton = require('../../buttons/components/flatButton');
var StarRatingSelectedItem = require('./starRatingSelectedItem');
var StarRatingUnselectedItem = require('./starRatingUnselectedItem');
var classnames = require('classnames');

var StarRating = React.createClass({
	displayName: 'StarRating',


	getInitialState: function getInitialState() {
		return {
			hoveredItemNumber: null

		};
	},

	getClassName: function getClassName() {

		if (this.props.isDisabled) {
			return classnames('star-rating', this.props.className, 'is-disabled');
		} else {
			return classnames('star-rating', this.props.className);
		}
	},

	getItems: function getItems() {
		var total = this.props.total;
		var that = this;
		var value = this.state.hoveredItemNumber || this.props.value;

		return _.times(total, function (index) {

			var icon = "star-empty";
			var type = "";

			if (index + 1 <= value) {
				icon = "star";
				type = "primary";
			}

			return React.createElement(StarRatingSelectedItem, {
				type: type,
				itemNumber: index + 1,
				key: index,
				onClick: that.onButtonClick,
				icon: icon,
				onHover: that.onHover,
				isDisabled: that.props.isDisabled
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
			{ className: this.getClassName() },
			this.getItems()
		);
	}

});

module.exports = StarRating;