var React = require('react');
var FlatButton = require('../buttons/flatButton');

var StarRatingUnselectedItem = React.createClass({

	onButtonClick: function() {
		this.props.onClick(this.props.itemNumber);
	},

	render: function() {
		return (
			<div className="star-rating-item">
				<FlatButton 
					icon="star-empty"
					className="star-rating-item-unselected"
					onClick={this.onButtonClick}/>
			</div>
		);
	}

});

module.exports = StarRatingUnselectedItem;