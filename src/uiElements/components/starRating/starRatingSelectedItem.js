var React = require('react');
var FlatButton = require('../buttons/flatButton')

var StarRatingSelectedItem = React.createClass({

	onButtonClick: function() {
		this.props.onClick(this.props.itemNumber);
	},

	render: function() {
		return (
			<div className="star-rating-item">
				<FlatButton 
					icon="star"
					className="star-rating-item-selected secondary"
					onClick={this.onButtonClick}/>
			</div>
		);
	}

});

module.exports = StarRatingSelectedItem;