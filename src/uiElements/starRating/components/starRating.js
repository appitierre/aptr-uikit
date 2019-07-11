var React = require('react');
var FlatButton = require('../../buttons/components/flatButton');
var StarRatingSelectedItem = require('./starRatingSelectedItem');
var StarRatingUnselectedItem = require('./starRatingUnselectedItem');
var classnames = require('classnames');

var StarRating = React.createClass({

	getInitialState: function() {
		return {
			hoveredItemNumber: null
		}
	},

	getClassName: function() {

		if (this.props.isDisabled) {
			return classnames('star-rating', this.props.className, 'is-disabled');
		} else {
			return classnames('star-rating', this.props.className);
		}
	},

	getItems: function() {
		var total = this.props.total;
		var autoFocusProp = this.props.autoFocus;
		var that = this;
		var value = (this.state.hoveredItemNumber || this.props.value);

		return _.times(total, function(index) {

			var autoFocus = false;
			var icon = "star-empty";
			var type = ""
			if (index + 1 <= value) {
				icon = "star";
				type = "primary"
			}

			if (index === 0 & autoFocusProp) {
				autoFocus = true
			}

			var input = <input
				type="radio"
				value={index + 1}
				name="rating"
				autoFocus={autoFocus}
				disabled={that.props.isDisabled}
				aria-hidden={that.props.isDisabled}
				onClick={() => {that.onHover(index + 1)}}
				onKeyDown={(event) => {that.handleRadioButtonKeyPress(event, index + 1)}}
				id={`rate${index + 1}`}
			/>

			var labelIcon = <i className={`icon icon-${icon} ${type}`} />

			var label = <label
				className={`star-rating-label ${that.props.isDisabled ? 'is-disabled' : ''}`}
				htmlFor={`rate${index + 1}`}
				value={index + 1}
				aria-hidden={that.props.isDisabled}
				onClick={() => {that.onButtonClick(index + 1)}}
				onMouseEnter={() => {that.onHover(index + 1)}}
				onMouseLeave={() => {that.onHover(null)}}
			>
				{labelIcon}
			</label>

			return [input, label];
		})
	},

	handleRadioButtonKeyPress: function(e, number) {
		if (e.keyCode == 32 || e.keyCode == 13) {
			this.onButtonClick(number);
		}
		return;
	},

	onHover: function(number) {
		if (this.props.isDisabled) {
			return
		}
		this.setState({
			hoveredItemNumber: number
		})
	},

	onButtonClick: function(itemNumber) {
		if (this.props.isDisabled) {
			return
		}
		this.props.onChange(itemNumber);
	},

	render: function() {
		return (
			<form className={this.getClassName()} aria-label={`Average star rating ${this.props.value} out of ${this.props.total}`}>
				{this.getItems()}
			</form>
		)
	}

});

module.exports = StarRating;