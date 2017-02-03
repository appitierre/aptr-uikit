'use strict';

var React = require('react');
var Section = require('section');
var Alert = require('../components/alert');

var AlertExamples = React.createClass({
	displayName: 'AlertExamples',


	getComponents: function getComponents() {
		return [React.createElement(Alert, {
			icon: 'trash',
			text: 'Alert',
			type: 'error'
		})];
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Alert',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = AlertExamples;