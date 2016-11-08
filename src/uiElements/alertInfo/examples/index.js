var React = require('react');
var Section = require('section');
var AlertInfo = require('../components/alertInfo');

var AlertInfoExamples = React.createClass({

	getComponents: function() {
		return [
			<AlertInfo 
				type="warning"
				icon="star"
				text="This is the warning Alert Info component"
			/>,
			<AlertInfo 
				type="info"
				icon="star"
				text="This is the info Alert Info component"
			/>,
			<AlertInfo 
				type="success"
				icon="star"
				text="This is the success Alert Info component"
			/>,
			<AlertInfo 
				type="danger"
				icon="star"
				text="This is the danger Alert Info component"
			/>
		]
	},

	render: function() {
	console.log("alert info rendering");
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