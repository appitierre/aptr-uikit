'use strict';

var React = require('react');
var Section = require('section');
var Chip = require('../components/chip');

var ChipExamples = React.createClass({
	displayName: 'ChipExamples',


	getComponents: function getComponents() {
		return [React.createElement(Chip, {
			text: "Courses"
		}), React.createElement(Chip, {
			text: "Components"
		}), React.createElement(Chip, {
			text: "Content"
		})];
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Chip',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = ChipExamples;