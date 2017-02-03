'use strict';

var React = require('react');
var Button = require('../../buttons/components/button');
var classNames = require('classnames');
var _ = require('lodash');
var clickOutside = require('react-onclickoutside');
var SelectOptionsItem = require('./selectOptionsItem');

var SelectOptions = React.createClass({
	displayName: 'SelectOptions',


	getInitialState: function getInitialState() {
		return {
			isOpen: false
		};
	},

	getDropDownText: function getDropDownText() {
		if (!this.props.value) {
			return this.props.initialText;
		}
		return _.find(this.props.options, { _value: this.props.value }).text;
	},

	getButtonIcon: function getButtonIcon() {
		if (this.state.isOpen === false) {
			return 'chevron-down';
		} else {
			return 'chevron-up';
		}
	},

	handleClickOutside: function handleClickOutside() {
		if (this.state.isOpen) {
			this.toggleDropDown();
		}
	},

	toggleDropDown: function toggleDropDown() {
		var isOpen = !this.state.isOpen;

		this.setState({
			isOpen: isOpen
		});
	},

	getClassName: function getClassName() {
		return classNames('select-options', this.props.className);
	},

	onDropDownClicked: function onDropDownClicked() {
		this.toggleDropDown();
	},

	onOptionClicked: function onOptionClicked(value) {
		this.toggleDropDown();
		this.props.onChange(value);
	},

	renderOptions: function renderOptions() {
		var _this = this;

		if (this.state.isOpen) {

			var options = _.map(this.props.options, function (option, index) {
				return React.createElement(SelectOptionsItem, {
					value: option._value,
					text: option.text,
					onClick: _this.onOptionClicked,
					key: index
				});
			});

			var className = "select-options-list";

			if (this.props.iconPosition === "right") {
				className = "select-options-list is-right-direction";
			};

			return React.createElement(
				'div',
				{ className: className },
				options
			);
		}
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: this.getClassName() },
			React.createElement(Button, {
				type: this.props.type || "secondary",
				text: this.getDropDownText(),
				onClick: this.onDropDownClicked,
				icon: this.getButtonIcon(),
				iconPosition: this.props.iconPosition || 'left'
			}),
			this.renderOptions()
		);
	}

});

module.exports = clickOutside(SelectOptions);