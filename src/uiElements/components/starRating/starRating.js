var React = require('react');
var FlatButton = require('../buttons/flatButton');
var StarRatingSelectedItem = require('./starRatingSelectedItem');
var StarRatingUnselectedItem = require('./starRatingUnselectedItem');

var StarRating = React.createClass({

	getItems: function() {
	var total = this.props.total;
	var that = this;

		return _.times(total, function(index) {
			if (index + 1 <= that.props.value) {	
				return (
					<StarRatingSelectedItem 
						itemNumber={index+1}
						key={index}
						onClick={_.bind(function(itemNumber) {
							that.onButtonClick(itemNumber)
						}, that)} 
					/>
				)
			} else {
				return (
					<StarRatingUnselectedItem 
						itemNumber={index+1}
						key={index}
						onClick={_.bind(function(itemNumber) {
							that.onButtonClick(itemNumber)
						}, that)} 
					/>
				)
			}
		})
	},

	onButtonClick: function(itemNumber) {		
		this.props.onChange(itemNumber);
	},

	render: function() {
		return ( 
			<div className="star-rating">
				{this.getItems()}
			</div>
		)
	}

});

module.exports = StarRating;