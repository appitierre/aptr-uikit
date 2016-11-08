'use strict';

var React = require('react');
var Button = require('./button');
var ButtonOptionItem = require('./buttonOptionItem');

var ButtonOptions = React.createClass({
	displayName: 'ButtonOptions',


	getInitialState: function getInitialState() {
		return {
			isOpen: false
		};
	},

	toggleDropDown: function toggleDropDown() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	},

	renderComponent: function renderComponent() {
		return React.createElement(Button, {
			className: 'button-options-button',
			type: this.props.type,
			onClick: this.onClick,
			text: this.props.text,
			isSmall: this.props.isSmall
		});
	},

	renderOptionButton: function renderOptionButton() {
		var icon = "chevron-down";

		if (this.props.optionsPosition === "top") {
			icon = "chevron-up";
		};

		return React.createElement(Button, {
			className: 'button-options-selector',
			icon: icon,
			onClick: this.onOptionButtonClicked,
			type: this.props.type,
			isSmall: this.props.isSmall
		});
	},

	renderOptions: function renderOptions() {
		var _this = this;

		if (this.state.isOpen) {
			var options = _.map(this.props.options, function (option, index) {
				return React.createElement(ButtonOptionItem, {
					text: option.title,
					body: option.body,
					key: index,
					value: option.value,
					onClick: _this.onOptionClicked
				});
			});

			return React.createElement(
				'div',
				{ className: 'button-options-list' },
				options
			);
		};
	},

	onOptionClicked: function onOptionClicked(value) {
		this.toggleDropDown();
		this.props.onChange(value);
	},

	onOptionButtonClicked: function onOptionButtonClicked() {
		this.toggleDropDown();
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'button-options' },
			this.renderComponent(),
			this.renderOptionButton(),
			this.renderOptions()
		);
	}

});

module.exports = ButtonOptions;