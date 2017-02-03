'use strict';

var React = require('react');
var Section = require('section');
var RangeSlider = require('../components/rangeSlider');

var RangeSliderExamples = React.createClass({
	displayName: 'RangeSliderExamples',


	getComponents: function getComponents() {
		return [React.createElement(RangeSlider, {
			onChange: this.onChange,
			step: 1,
			min: 1,
			max: 100,
			defaultValue: 30
		})];
	},

	onChange: function onChange(value) {
		console.log("range slider value:", value);
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Range Slider',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = RangeSliderExamples;