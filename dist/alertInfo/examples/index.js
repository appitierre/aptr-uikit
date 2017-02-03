'use strict';

var React = require('react');
var Section = require('section');
var AlertInfo = require('../components/alertInfo');

var AlertInfoExamples = React.createClass({
	displayName: 'AlertInfoExamples',


	getComponents: function getComponents() {
		return [React.createElement(AlertInfo, {
			type: 'warning',
			icon: 'cloud-crossed',
			text: 'Your changes have not been saved'
		}), React.createElement(AlertInfo, {
			type: 'info',
			icon: 'cloud-sync',
			text: 'Saving your changes'
		}), React.createElement(AlertInfo, {
			type: 'success',
			icon: 'cloud-check',
			text: 'All changes have been saved'
		})];
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Alert Info',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = AlertInfoExamples;