var React = require('react');
var Section = require('section');
var ProgressBar = require('../components/progressBar');

var ProgressBarExamples = React.createClass({

	getInitialState: function() {
		return {
			progressValue: 50 
		}
	},

	getComponents: function() {
		return [
			<ProgressBar 
				value={this.state.progressValue}
				ariaValueNow="3"
				ariaValueMin="0"
				ariaValueMax="6"
			/>
		]
	},

	render: function() {
		return (
			<div>
				<Section
					title="Progress Bar"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = ProgressBarExamples;