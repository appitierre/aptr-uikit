'use strict';

var React = require('react');
var Section = require('section');
var CollectionItem = require('../components/collectionItem');
var CollectionItemAction = require('./collectionItemAction_example');
var CollectionItemContent = require('./collectionItemContent_example');

var CollectionItemExamples = React.createClass({
	displayName: 'CollectionItemExamples',


	getComponents: function getComponents() {
		return [React.createElement(CollectionItem, {
			contentComponent: React.createElement(CollectionItemContent, {
				title: 'Content Title',
				body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
			}),
			actionsComponent: React.createElement(CollectionItemAction, null)
		})];
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Collection Item',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = CollectionItemExamples;