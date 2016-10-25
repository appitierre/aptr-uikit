var React = require('react');
var Section = require('section');
var Chip = require('../components/chip');

var ChipExamples = React.createClass({

	getComponents: function() {
		return [
			<Chip
				text={"Courses"}
			/>,
			<Chip
				text={"Components"}
			/>,
			<Chip
				text={"Content"}
			/>
		]
	},

	render: function() {
		return (
			<div>
				<Section
					title="Chip"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = ChipExamples;