'use strict';

var React = require('react');
var Section = require('section');
var ActionBar = require('../components/actionBar');
var Button = require('../../buttons/components/button');

var ActionBarExamples = React.createClass({
	displayName: 'ActionBarExamples',


	getComponents: function getComponents() {
		return [React.createElement(
			ActionBar,
			null,
			React.createElement(Button, {
				text: 'Action Bar button',
				type: 'primary',
				icon: 'action' })
		)];
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Action Bar',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = ActionBarExamples;