'use strict';

var React = require('react');
var classNames = require('classnames');

// @PROPS:
// 	className: String,
// 	contentComponent: Component (collectionItemContent_example.jsx), required
// 	actionsComponent: Component (collectionItemAction_example.jsx)

// For a collection item it is important you have a content component. 


var CollectionItem = React.createClass({
	displayName: 'CollectionItem',


	getClassName: function getClassName() {
		return classNames('collection-item', this.props.className);
	},

	getActions: function getActions() {
		if (this.props.actionsComponent) {
			return React.createElement(
				'div',
				{ className: 'collection-item-actions' },
				this.props.actionsComponent
			);
		}
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: this.getClassName() },
			React.createElement(
				'div',
				{ className: 'collection-item-content' },
				this.props.contentComponent
			),
			this.getActions()
		);
	}

});

module.exports = CollectionItem;