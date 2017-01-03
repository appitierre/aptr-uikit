'use strict';

var React = require('react');
var Section = require('section');
var Tabs = require('../components/tabs');

var TabsExamples = React.createClass({
	displayName: 'TabsExamples',


	getInitialState: function getInitialState() {
		return {
			tabsValue: "Item one"
		};
	},

	getComponents: function getComponents() {
		return [React.createElement(Tabs, {
			items: [{
				icon: "pencil4",
				label: "Item one",
				component: React.createElement('img', { src: 'http://lorempixel.com/output/animals-q-c-600-480-4.jpg' }),
				value: "Item one"
			}, {
				icon: "pencil4",
				label: "Item two",
				component: React.createElement('img', { src: 'http://lorempixel.com/output/animals-q-c-600-480-6.jpg' }),
				value: "Item two"
			}],
			value: this.state.tabsValue,
			onChange: this.onChange
		})];
	},

	onChange: function onChange(value) {
		console.log(value);

		this.setState({
			tabsValue: value
		});
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Tabs',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = TabsExamples;