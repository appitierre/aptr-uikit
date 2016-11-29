var React = require('react');

var NarrativeIndicators = React.createClass({

	renderIndicators: function() {
		var stage = this.props.stage;

		return _.times(this.props.length, function(index) {	
			var className = "narrative-slider-indicator-item";

			if (stage === index) {
				className = "narrative-slider-indicator-item selected"
			}

			return (
				<div className={className} key={index}>
				</div>
			);
		});
	},

	render: function() {	
		return (
			<div className="narrative-slider-indicators">
				{this.renderIndicators()}
			</div>
		);
	}

});

module.exports = NarrativeIndicators;