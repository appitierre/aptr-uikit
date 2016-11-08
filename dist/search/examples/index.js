'use strict';

var React = require('react');
var Section = require('section');
var SearchBar = require('../components/searchBar');

var SearchBarExamples = React.createClass({
	displayName: 'SearchBarExamples',


	getComponents: function getComponents() {
		return [React.createElement(SearchBar, {
			onClick: this.onClick,
			onChange: this.onChange
		}), React.createElement(SearchBar, {
			onClick: this.onClick,
			onChange: this.onChange,
			isSmall: true
		})];
	},

	onClick: function onClick() {
		console.log("the search button has been clicked");
	},

	onChange: function onChange(value) {
		console.log("the value of the search input:", value);
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Search Bar',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = SearchBarExamples;