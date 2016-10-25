var React = require('react');
var FlatButton = require('../../buttons/components/flatButton');

var StarRatingSelectedItem = React.createClass({

	onButtonClick: function() {
		
		this.props.onClick(this.props.itemNumber);
		
	},

	onMouseEnter: function() {
		
		if (this.props.isDisabled) {
			return;
		}

		this.props.onHover(this.props.itemNumber);

	},

	onMouseLeave: function() {
		
		if (this.props.isDisabled) {
			return;
		}

		this.props.onHover(null);

	},

	render: function() {
	console.log("ICON:", this.props.icon)
		return (
			<div className="star-rating-item" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
				<FlatButton 
					icon={this.props.icon}
					className={this.props.className}
					type="secondary"
					onClick={this.onButtonClick}
					disabled={this.props.isDisabled}/>
			</div>
		);
	}

});

module.exports = StarRatingSelectedItem;