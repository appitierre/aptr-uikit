'use strict';

var React = require('react');
var Button = require('../buttons/button');

var DropDownOptions = React.createClass({
	displayName: 'DropDownOptions',


	getInitialState: function getInitialState() {
		return {
			isDisplayingList: false
		};
	},

	getItems: function getItems() {
		if (this.state.isDisplayingList === true) {
			return _.map(this.props.options, function (item, key) {
				return React.createElement(
					'div',
					{ className: 'drop-down-item' },
					item.text
				);
			});
		}
	},

	getButtonIcon: function getButtonIcon() {
		if (this.state.isDisplayingList === false) {
			return 'chevron-down';
		} else {
			return 'chevron-up';
		}
	},

	getSelector: function getSelector() {
		return React.createElement(
			'div',
			{ className: 'drop-down-selector' },
			React.createElement(Button, { type: 'secondary', text: 'select', onClick: this.onSelectorClicked, icon: this.getButtonIcon(), iconPosition: 'right' })
		);
	},

	onSelectorClicked: function onSelectorClicked() {
		var isDisplayingList = !this.state.isDisplayingList;

		this.setState({
			isDisplayingList: isDisplayingList
		});
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'drop-down' },
			this.getSelector(),
			React.createElement(
				'div',
				{ className: 'drop-down-item-container' },
				this.getItems()
			)
		);
	}

});

module.exports = DropDownOptions;