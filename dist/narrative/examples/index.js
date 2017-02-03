'use strict';

var React = require('react');
var Section = require('section');
var Narrative = require('../components/narrative');

var NarrativeExamples = React.createClass({
	displayName: 'NarrativeExamples',


	getInitialState: function getInitialState() {
		return {
			stage: 0
		};
	},

	getComponents: function getComponents() {
		return [React.createElement(Narrative, {
			onChange: this.onChange,
			stage: this.state.stage,
			items: [{
				title: "Narrative Item title 1",
				body: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
				itemIndex: 0,
				_graphic: {
					src: "http://placekitten.com/g/1024/300"
				}
			}, {
				title: "Narrative Item title 2",
				body: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
				itemIndex: 1,
				_graphic: {
					src: "http://placekitten.com/g/1024/300"
				}
			}, {
				title: "Narrative Item title 3",
				body: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
				itemIndex: 2,
				_graphic: {
					src: "http://placekitten.com/g/1024/300"
				}
			}]
		})];
	},

	onChange: function onChange(stage) {
		this.setState({
			stage: stage
		});
	},

	render: function render() {
		return React.createElement(Section, {
			title: 'Narrative',
			components: this.getComponents(),
			shouldDisplayAsBlock: true
		});
	}

});

module.exports = NarrativeExamples;