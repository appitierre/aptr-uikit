'use strict';

var React = require('react');
var Button = require('../../buttons/components/button');
var ClassNames = require('classnames');
var _ = require('lodash');

var ButtonGroup = React.createClass({
	displayName: 'ButtonGroup',


	componentWillMount: function componentWillMount() {
		if (!this.props.buttonType) {
			console.warn("You're currently missing a buttonType prop on a Button Group");
		}

		if (!this.props.value) {
			console.warn("You're currently missing a value prop on a Button Group");
		}

		if (!this.props.onChange) {
			console.warn("You're currently missing a onChange prop on a Button Group");
		}
	},

	getClassName: function getClassName() {
		if (this.props.isSmall) {
			return ClassNames('button-group-toggle', this.props.className, 'is-small');
		}

		return ClassNames('button-group-toggle', this.props.className);
	},

	getButtons: function getButtons() {
		var _this = this;

		return _.map(this.props.buttons, function (item, index) {
			var className = '';
			// Adds buttonType class to selected button item
			if (item._value === _this.props.value) {
				className = _this.props.buttonType;
			}

			return React.createElement(Button, {
				onClick: _.bind(function () {
					this.onButtonItemClicked(item._value);
				}, _this),
				key: index,
				className: className,
				icon: item._icon,
				toolTip: item.toolTip,
				toolTipPosition: item.toolTipPosition,
				isSmall: _this.props.isSmall
			});
		});
	},

	getButtonToggle: function getButtonToggle() {
		var _this2 = this;

		var className = this.props.buttonType;
		// Adds buttonType class to selected button item
		var item = _.find(this.props.buttons, function (button) {
			if (button._value === _this2.props.value) {
				return button;
			}
		});

		return React.createElement(Button, {
			onClick: this.onButtonToggleClicked,
			className: className,
			icon: item._icon,
			toolTip: item.toolTip,
			toolTipPosition: item.toolTipPosition,
			isSmall: this.props.isSmall
		});
	},

	getButtonItems: function getButtonItems() {

		if (this.props.buttons.length === 2 && this.props.shouldUseToggle) {
			return this.getButtonToggle();
		} else {
			return this.getButtons();
		}
	},

	getAccessibilityTags: function getAccessibilityTags() {
        return {tabIndex: 0, role: 'button', name: this.props.text};
    },

	onButtonItemClicked: function onButtonItemClicked(value) {

		this.props.onChange(value);
	},

	onButtonToggleClicked: function onButtonToggleClicked() {
		var _this3 = this;

		var nextItem = _.find(this.props.buttons, function (nextButton) {
			if (nextButton._value != _this3.props.value) {
				return nextButton;
			}
		});

		this.props.onChange(nextItem);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: this.getClassName() },
			this.getButtonItems()
		);
	}

});

module.exports = ButtonGroup;