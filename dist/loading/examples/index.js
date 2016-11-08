'use strict';

var React = require('react');
var Section = require('section');
var Loading = require('../components/loading');

var LoadingExamples = React.createClass({
	displayName: 'LoadingExamples',


	getComponents: function getComponents() {
		return [React.createElement(
			Loading,
			{
				hasDataLoaded: false },
			React.createElement(
				'div',
				null,
				'DATA HAS LOADED'
			)
		), React.createElement(
			Loading,
			{
				hasDataLoaded: true },
			React.createElement(
				'div',
				null,
				'DATA HAS LOADED'
			)
		)];
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Loading',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = LoadingExamples;