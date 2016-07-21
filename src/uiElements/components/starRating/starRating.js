var React = require('react');
var FlatButton = require('../buttons/flatButton');
var StarRatingItem = require('./starRatingItem')

var StarRating = React.createClass({

	getItems: function() {
	var total = this.props.total;
		
		return _.times(total, function(item, index) {
			return (
				<StarRatingItem />
			)
		}, this)
	},

	onClick: function() {
		console.log('')
	},

	render: function() {
		return ( 
			<div className="star-rating-item">
				{this.getItems()}
			</div>
		)
	}

});

module.exports = StarRating;