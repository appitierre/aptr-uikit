var React = require('react');
var FlatButton = require('../../buttons/components/flatbutton');
var StarRatingSelectedItem = require('./starRatingSelectedItem');
var StarRatingUnselectedItem = require('./starRatingUnselectedItem');
var classnames = require('classnames');

var StarRating = React.createClass({

	getInitialState: function() {
		return {
			hoveredItemNumber: null,

		}
	},

	getClassName: function() {
		return classnames('star-rating', {
			'is-disabled': this.props.isDisabled
		})
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
					onClick={that.onButtonClick}
					icon={icon}
					onHover={that.onHover}
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
			<div className={this.getClassName()}>
				{this.getItems()}
			</div>
		)
	}

});

module.exports = StarRating;