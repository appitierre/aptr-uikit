var React = require('react');
var FlatButton = require('../../buttons/components/flatButton');
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

		if (this.props.isDisabled) {
			return classnames('star-rating', this.props.className, 'is-disabled');
		} else {
			return classnames('star-rating', this.props.className);
		}
	},

	getItems: function() {
		var total = this.props.total;
		var that = this;
		var value = (this.state.hoveredItemNumber || this.props.value);
		var labels = this.props.labels || [];

		return _.times(total, (index) => {
			
			var icon = "star-empty";	
			var isActive = false;
			var itemNumber = index + 1;

			if (index + 1 <= value) {
				icon = "star";
				isActive = true;
			}

			return (
				<StarRatingSelectedItem
					itemNumber={itemNumber}
					key={index}
					label={labels[index] || `Star ${itemNumber}`}
					icon={icon}
					onHover={that.onHover}
					onClick={that.onButtonClick}
					isSelected={this.props.value === itemNumber}
					isActive={isActive}
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