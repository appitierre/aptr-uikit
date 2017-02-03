var React = require('react');
var Section = require('section');
var Alert = require('../components/alert');

var AlertExamples = React.createClass({

	getComponents: function() {
		return [
			<Alert 
				icon="trash"
				text="Alert"
				type="error"
			/>
		]
	},

	render: function() {
		return (
			<div>
				<Section
					title="Alert"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = AlertExamples;