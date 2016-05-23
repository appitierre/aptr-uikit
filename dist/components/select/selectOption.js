'use strict';

var React = require('react');
var Button = require('../buttons/button');
var _ = require('underscore');

var DropDownOptions = React.createClass({
	displayName: 'DropDownOptions',


	getInitialState: function getInitialState() {
		return {
			isDisplayingList: false,
			value: this.props.value
		};
	},

	getItems: function getItems() {
		if (this.state.isDisplayingList === true) {
			return _.map(this.props.options, function (item, key) {
				return React.createElement(
					'div',
					{ className: 'select-option-item',
						key: item.index,
						onClick: _.bind(function () {
							this.onButtonItemClicked(item._value);
						}, this) },
					item.text
				);
			}, this);
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
			{ className: 'select-option-selector' },
			React.createElement(Button, { type: 'secondary', text: this.state.value, onClick: this.onSelectorClicked, icon: this.getButtonIcon(), iconPosition: 'right' })
		);
	},

	renderClassName: function renderClassName() {
		if (this.props.className) {
			return "select-option " + this.props.className;
		} else {
			return "select-option";
		}
	},

	onButtonItemClicked: function onButtonItemClicked(value) {
		this.setState({
			isDisplayingList: false,
			value: value
		});
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
			{ className: this.renderClassName() },
			this.getSelector(),
			React.createElement(
				'div',
				{ className: 'select-option-item-container' },
				this.getItems()
			)
		);
	}

});

module.exports = DropDownOptions;