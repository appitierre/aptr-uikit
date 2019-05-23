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
			var autoFocus = false;

			if (index + 1 <= value) {
				icon = "star";
				type = "primary";
			}

			if (index === 0 ){
				autoFocus = true;
			}

			var input = React.createElement('input', {
				type: "radio", 
				value: index + 1,
				name: "rating", 
				autoFocus: autoFocus,
				disabled: that.props.isDisabled,
				onClick: () => {that.onHover(index + 1)},
				onKeyDown: (event) => {that.handleRadioButtonKeyPress(event, index + 1)},
				id:`rate${index + 1}`})

			var labelIcon = React.createElement('i', {className: ' icon icon-' + icon + ' ' + type});

			var label = React.createElement('label', {
				className: `star-rating-label ${that.props.isDisabled ? 'is-disabled' : ''}`,
				htmlFor: `rate${index+1}`,
				value: index + 1,
				onClick: () => {that.onButtonClick(index + 1)},
				onMouseEnter: () => {that.onHover(index + 1)},
				onMouseLeave: () => {that.onHover(null)}
			}, labelIcon)

			return [input, label];
		});
	},

	handleRadioButtonKeyPress: function handleRadioButtonKeyPress(e, number) {
		if (e.keyCode == 32 || e.keyCode == 13) {
			this.onButtonClick(number);
		}
		return;
	},

	onHover: function onHover(number) {
		if (this.props.isDisabled) {
			return
		}
		this.setState({
			hoveredItemNumber: number
		});
	},

	onButtonClick: function onButtonClick(itemNumber) {
		if (this.props.isDisabled) {
			return
		}
		this.props.onChange(itemNumber);
	},

	render: function render() {
		return React.createElement(
			'form',
			{ className: this.getClassName(), tabIndex: 0, 'aria-label': `Average Star Rating ${this.props.value} out of ${this.props.total}.a}`, 'aria-live': "polite" },
			this.getItems()
		);
	}

});

module.exports = StarRating;