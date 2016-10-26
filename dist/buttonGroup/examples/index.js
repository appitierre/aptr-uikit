'use strict';

var React = require('react');
var Section = require('section');
var ButtonGroup = require('../components/buttonGroup');

var ButtonGroupExamples = React.createClass({
	displayName: 'ButtonGroupExamples',


	getComponents: function getComponents() {
		return [React.createElement(ButtonGroup, {
			buttonType: 'primary',
			value: 'menu',
			onChange: this.onChange,
			buttons: [{
				"_icon": "menu",
				"_value": "menu" }, {
				"_icon": "trash",
				"_value": "trash"
			}, {
				"_icon": "check",
				"_value": "check"
			}]
		})];
	},

	onChange: function onChange(value) {
		console.log("this button group has changed it's value to ", value);
	},

	render: function render() {
		return React.createElement(Section, {
			title: 'Button Group',
			components: this.getComponents(),
			shouldDisplayAsBlock: false
		});
	}

});

module.exports = ButtonGroupExamples;