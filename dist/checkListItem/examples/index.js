'use strict';

var React = require('react');
var Section = require('section');
var CheckListItem = require('../components/checkListItem');

var index = React.createClass({
	displayName: 'index',


	getInitialState: function getInitialState() {
		return {
			isChecked: false
		};
	},

	getComponents: function getComponents() {
		return [React.createElement(
			CheckListItem,
			{
				isChecked: this.state.isChecked,
				onCheck: this.onCheck },
			React.createElement(
				'div',
				null,
				'Check List Item'
			)
		)];
	},

	onCheck: function onCheck(checked) {
		var isChecked = "no";

		if (checked === true) {
			isChecked = "yes";
		}

		console.log("Is this item checked?", isChecked);

		this.setState({
			isChecked: checked
		});
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Check List Item',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = index;