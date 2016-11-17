var React = require('react');
var Section = require('section');
var Accordion = require('../components/accordion');

var AccordionExamples = React.createClass({

	getComponents: function() {
		return [
			<Accordion
				onChange={this.onChange}
				icon="plus"
				items={[
					{
						title: "Accordion Title 1",
						_isVisited: false,
						_isSelected: false,
						body: "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source"
					},
					{
						title: "Accordion Title 2",
						_isVisited: false,
						_isSelected: false,
						body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
					} 
				]}
			/>
		]
	},

	onChange: function(item) {
		console.log(item);

		
	},

	render: function() {
		return (
			<div>
				<Section
					title="Accordion"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = AccordionExamples;