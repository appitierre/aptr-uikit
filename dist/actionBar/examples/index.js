'use strict';

var React = require('react');
var Section = require('section');
var ActionBar = require('../components/actionBar');

//Components to be used inside of the action bar
var Button = require('../../buttons/components/button');
var SearchBar = require('../../search/components/searchBar');
var Pagination = require('../../pagination/components/pagination');

var ActionBarExamples = React.createClass({
	displayName: 'ActionBarExamples',


	getComponents: function getComponents() {
		return [React.createElement(
			ActionBar,
			null,
			React.createElement(Button, {
				text: 'Action Bar button',
				type: 'primary',
				icon: 'action' }),
			React.createElement(SearchBar, null),
			React.createElement(Pagination, {
				currentPage: 2,
				totalPages: 5,
				buttonType: 'secondary',
				className: 'course' })
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