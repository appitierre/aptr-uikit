'use strict';

var React = require('react');
var Section = require('section');
var Card = require('../components/card');
var Button = require('../../buttons/components/button');

var CardExamples = React.createClass({
	displayName: 'CardExamples',


	onClick: function onClick() {
		console.log("this component has been clicked");
	},

	getComponents: function getComponents() {
		return [React.createElement(
			Card,
			null,
			React.createElement(Button, {
				type: 'primary',
				text: 'Button for card component',
				onClick: this.onClick }),
			React.createElement(
				'div',
				null,
				'Card component'
			)
		)];
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Card',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = CardExamples;