'use strict';

var React = require('react');
var Section = require('section');
var DropDown = require('../components/dropDown');
var DropDownItems = require('./dropDownItems_example');

var DropDownExamples = React.createClass({
	displayName: 'DropDownExamples',


	getComponents: function getComponents() {
		return [React.createElement(DropDown, {
			icon: 'menu',
			text: 'Click here to open dropdown',
			component: React.createElement(DropDownItems, null)
		})];
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'DropDown',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = DropDownExamples;