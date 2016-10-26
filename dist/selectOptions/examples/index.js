'use strict';

var React = require('react');
var Section = require('section');
var SelectOptions = require('../components/selectOptions');

var SelectOptionExamples = React.createClass({
	displayName: 'SelectOptionExamples',


	getInitialState: function getInitialState() {
		return {
			value: ''
		};
	},

	getComponents: function getComponents() {
		return [React.createElement(SelectOptions, {
			className: 'options',
			type: 'primary',

			value: this.state.value,
			initialText: 'Select',
			onChange: this.onSelectOptionChanged,
			options: [{
				text: 'Ascending',
				_value: 'ascending'
			}, {
				text: 'Descending',
				_value: 'descending'
			}, {
				text: 'Recent',
				_value: 'recent'
			}, {
				text: 'Oldest',
				_value: 'oldest'
			}]
		})];
	},

	onSelectOptionChanged: function onSelectOptionChanged(value) {
		this.setState({
			value: value
		});
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Select Option',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = SelectOptionExamples;