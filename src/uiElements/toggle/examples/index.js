var React = require('react');
var Section = require('section');
var Toggle = require('../components/itemToggle');

var ToggleExamples = React.createClass({

	getComponents: function() {
		return [
			<Toggle 
				initialValue={false}
				toggleId="toggle-id"
				onChange={this.onChange}
			/>
		]
	},

	onChange: function(checked) {
		console.log(checked);
	},	

	render: function() {
		return (
			<div>
				<Section
					title="Toggle"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = ToggleExamples;