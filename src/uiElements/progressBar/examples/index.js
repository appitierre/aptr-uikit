var React = require('react');
var Section = require('section');
var ProgressBar = require('../components/progressBar');

var ProgressBarExamples = React.createClass({

	getInitialState: function() {
		return {
			progressValue: 23 
		}
	},

	getComponents: function() {
		return [
			<ProgressBar 
				value={this.state.progressValue}
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