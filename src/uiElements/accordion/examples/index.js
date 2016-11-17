var React = require('react');
var Section = require('section');
var Accordion = require('../components/accordion');

var AccordionExamples = React.createClass({

	getInitialState: function() {
		return {
			_items: [
				{
					title: "Accordion Title 1",
					body: "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source"
				},
				{
					title: "Accordion Title 2",
					body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
				} 
			]
		}
	},

	getComponents: function() {
		return [
			<Accordion
				onChange={this.onChange}
				icon="plus"
				iconSelected="minus"
				items={this.state._items}
				className=""
			/>
		]
	},

	onChange: function(item) {
		// Should handle item selected and visited
		_.each(this.state._items, function(accordionItem) {
			if (item != accordionItem) {
				accordionItem._isSelected = false;
			}
		});

		item._isSelected = !item._isSelected;
		item._isVisited = true;
		this.setState({_items: this.state._items});
		
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