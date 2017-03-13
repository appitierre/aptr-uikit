'use strict';

var React = require('react');
var Section = require('section');
var Accordion = require('../components/accordion');

var AccordionExamples = React.createClass({
	displayName: 'AccordionExamples',


	getInitialState: function getInitialState() {
		return {
			_items: [{
				_id: 0,
				title: "Accordion Title 1",
				body: "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source"
			}, {
				_id: 1,
				title: "Accordion Title 2",
				body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
			}, {
				_id: 2,
				title: "Accordion Title 3",
				body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
			}]
		};
	},

	getComponents: function getComponents() {
		return [React.createElement(Accordion, {
			onChange: this.onChange,
			icon: 'plus',
			iconSelected: 'minus',
			items: this.state._items,
			className: ''
		})];
	},

	onChange: function onChange(item) {
		// Should handle item selected and visited
		_.each(this.state._items, function (accordionItem) {
			if (item != accordionItem) {
				accordionItem._isSelected = false;
			}
		});

		item._isSelected = !item._isSelected;
		item._isVisited = true;
		this.setState({ _items: this.state._items });
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Accordion',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = AccordionExamples;