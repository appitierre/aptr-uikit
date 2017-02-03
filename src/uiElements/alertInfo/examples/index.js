var React = require('react');
var Section = require('section');
var AlertInfo = require('../components/alertInfo');

var AlertInfoExamples = React.createClass({

	getComponents: function() {
		return [
			<AlertInfo 
				type="warning"
				icon="cloud-crossed"
				text="Your changes have not been saved"
			/>,
			<AlertInfo 
				type="info"
				icon="cloud-sync"
				text="Saving your changes"
			/>,
			<AlertInfo 
				type="success"
				icon="cloud-check"
				text="All changes have been saved"
			/>
		]
	},

	render: function() {
		return (
			<div>
				<Section
					title="Alert Info"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = AlertInfoExamples;