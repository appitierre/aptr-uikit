var React = require('react');
var Section = require('section');
var StarRating = require('../components/starRating');

var StarRatingExamples = React.createClass({

	getInitialState: function() {
		return {
			value: 0,
			isDisabled: false
		}
	},

	getComponents: function() {
		return [
			<StarRating 
				total={5} 
			    value={this.state.value} 
			    onChange={this.onStarRatingChanged}
			    className="starss"
			    isDisabled={this.state.isDisabled}
			/>
		]
	},

	onStarRatingChanged: function(value) {
		this.setState({
			value: value
		});

		console.log("the star value is:", value)
	},

	render: function() {
		return (
			<div>
				<Section
					title="Star Rating"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = StarRatingExamples;