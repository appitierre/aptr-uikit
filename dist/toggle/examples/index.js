'use strict';

var React = require('react');
var Section = require('section');
var Toggle = require('../components/itemToggle');

var ToggleExamples = React.createClass({
	displayName: 'ToggleExamples',


	getComponents: function getComponents() {
		return [React.createElement(Toggle, {
			initialValue: false,
			toggleId: 'toggle-id',
			onChange: this.onChange
		})];
	},

	onChange: function onChange(checked) {
		console.log(checked);
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Toggle',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = ToggleExamples;