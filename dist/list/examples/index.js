'use strict';

var React = require('react');
var Section = require('section');
var ListItems = require('../components/listItems');
var ListItem = require('../components/listItem');

var ListItemsExamples = React.createClass({
	displayName: 'ListItemsExamples',


	getComponents: function getComponents() {
		return [React.createElement(ListItems, {
			shouldShowAlternativeColors: true,
			items: [React.createElement(ListItem, {
				itemText: 'this is the text for the list item',
				itemDetail: 'the item detail',
				key: 0,
				buttons: [{
					type: "primary",
					icon: "pencil4",
					onClick: this.onClick
				}]
			}), React.createElement(ListItem, {
				key: 1,
				onClick: this.onClick,
				component: React.createElement(
					'div',
					null,
					'List Item component'
				)
			})]
		})];
	},

	onClick: function onClick() {
		console.log("this has been clicked");
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'List Items',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = ListItemsExamples;