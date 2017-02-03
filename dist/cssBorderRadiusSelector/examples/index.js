'use strict';

var React = require('react');
var Section = require('section');
var CssBorderRadiusSelector = require('../components/cssBorderRadiusSelector');

var CssBorderRadiusSelectorExamples = React.createClass({
	displayName: 'CssBorderRadiusSelectorExamples',


	getInitialState: function getInitialState() {
		return {
			topLeft: false,
			topRight: false,
			bottomRight: false,
			bottomLeft: false
		};
	},

	getComponents: function getComponents() {
		return [React.createElement(CssBorderRadiusSelector, {
			topLeft: this.state.topLeft,
			topRight: this.state.topRight,
			bottomRight: this.state.bottomRight,
			bottomLeft: this.state.bottomLeft,
			onChange: this.onChange
		})];
	},

	onChange: function onChange(topLeft, topRight, bottomRight, bottomLeft) {
		this.setState({
			topLeft: topLeft,
			topRight: topRight,
			bottomRight: bottomRight,
			bottomLeft: bottomLeft
		});

		console.log(arguments);
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Css Border Radius Selector',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = CssBorderRadiusSelectorExamples;