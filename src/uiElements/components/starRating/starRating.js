var React = require('react');
var FlatButton = require('../buttons/flatButton');
var StarRatingSelectedItem = require('./starRatingSelectedItem');
var StarRatingUnselectedItem = require('./starRatingUnselectedItem');

var StarRating = React.createClass({

	getInitialState: function() {
		return {
			hoveredItemNumber: null,

		}
	},

	getItems: function() {
		var total = this.props.total;
		var that = this;
		var value = (this.state.hoveredItemNumber || this.props.value);

		return _.times(total, function(index) {
			
			var icon = "star-empty";	
			var className = ""

			if (index + 1 <= value) {
				icon = "star";	
			}

			return (
				<StarRatingSelectedItem
					className={className} 
					itemNumber={index+1}
					key={index}
					onClick={_.bind(function(itemNumber) {
						that.onButtonClick(itemNumber)
					}, that)}
					icon={icon}
					onHover={_.bind(function(number) {
						that.onHover(number)
					}, that)}
					isDisabled={that.props.isDisabled} 
				/>
			) 
		})
	},

	onHover: function(number) {
		this.setState({
			hoveredItemNumber: number
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