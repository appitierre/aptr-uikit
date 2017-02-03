'use strict';

var React = require('react');
var Section = require('section');
var SearchFilter = require('../components/searchFilter');

var SearchFilterExamples = React.createClass({
	displayName: 'SearchFilterExamples',


	getInitialState: function getInitialState() {
		return {
			searchValue: "",
			filter: ""
		};
	},

	getComponents: function getComponents() {
		return [React.createElement(SearchFilter, {
			placeholder: 'enter text here',
			onChange: this.onChange,
			filter: this.state.filter,
			value: this.state.value,
			shouldFocusInput: false,
			onFilterChanged: this.onFilterChanged,
			filters: [{
				text: 'Filter 1',
				_value: 'Filter 1'
			}, {
				text: 'Filter 2',
				_value: 'Filter 2'
			}, {
				text: 'Filter 3',
				_value: 'Filter 3'
			}]
		})];
	},

	onChange: function onChange(value) {
		this.setState({
			searchValue: value
		});
	},

	onFilterChanged: function onFilterChanged(value) {
		this.setState({
			filter: value
		});
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Search Filter',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = SearchFilterExamples;