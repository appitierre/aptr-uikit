'use strict';

var React = require('react');
var Section = require('section');
var CssBorderSelector = require('../components/cssBorderSelector');

var CssBorderSelectorExamples = React.createClass({
	displayName: 'CssBorderSelectorExamples',


	getInitialState: function getInitialState() {
		return {
			top: false,
			right: false,
			bottom: true,
			left: true
		};
	},

	getComponents: function getComponents() {
		return [React.createElement(CssBorderSelector, {
			top: this.state.top,
			right: this.state.right,
			bottom: this.state.bottom,
			left: this.state.left,
			onChange: this.onChange
		})];
	},

	onChange: function onChange(top, right, bottom, left) {
		this.setState({
			top: top,
			right: right,
			bottom: bottom,
			left: left
		});

		console.log(arguments);
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Css Border Selector',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = CssBorderSelectorExamples;