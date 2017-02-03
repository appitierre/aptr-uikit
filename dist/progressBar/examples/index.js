'use strict';

var React = require('react');
var Section = require('section');
var ProgressBar = require('../components/progressBar');

var ProgressBarExamples = React.createClass({
	displayName: 'ProgressBarExamples',


	getInitialState: function getInitialState() {
		return {
			progressValue: 23
		};
	},

	getComponents: function getComponents() {
		return [React.createElement(ProgressBar, {
			value: this.state.progressValue
		})];
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Progress Bar',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = ProgressBarExamples;