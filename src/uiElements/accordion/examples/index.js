var React = require('react');
var Section = require('section');
var Accordion = require('../components/accordion');

var AccordionExamples = React.createClass({

	getInitialState: function() {
		return {
			currentlySelectedItem: null
		}
	},

	getComponents: function() {
		return [
			<Accordion
				currentlySelectedItem={this.state.currentlySelectedItem}
				onChange={this.onChange}
				items={[
					{
						title: "Accordion Title 1",
						body: "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source",
						icon: "plus",
						iconSelected: "minus"
					},
					{
						title: "Accordion Title 2",
						body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
						icon: "plus",
						iconSelected: "minus"
					} 
				]}
			/>
		]
	},

	onChange: function(id) {
		this.setState({
			currentlySelectedItem: id 
		});
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