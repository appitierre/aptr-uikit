'use strict';

var React = require('react');
var Button = require('../buttons/button');
var _ = require('underscore');

var ButtonGroup = React.createClass({
	displayName: 'ButtonGroup',


	getInitialState: function getInitialState() {
		return {
			_value: this.props.value
		};
	},

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
		var className = 'button-group-toggle';

		if (this.props.className) {
			className += ' ' + this.props.className;
		}

		return className;
	},

	getButtons: function getButtons() {
		return _.map(this.props.buttons, function (item, index) {
			var className = '';
			// Adds buttonType class to selected button item
			if (item._value === this.state._value) {
				className = this.props.buttonType;
			}

			return React.createElement(Button, {
				onClick: _.bind(function () {
					this.onButtonItemClicked(item._value);
				}, this),
				key: index,
				className: className,
				icon: item._icon,
				toolTip: item.toolTip,
				toolTipPosition: item.toolTipPosition
			});
		}, this);
	},

	getButtonToggle: function getButtonToggle() {
		var className = this.props.buttonType;
		// Adds buttonType class to selected button item
		var item = _.find(this.props.buttons, function (button) {
			if (button._value != this.state._value) {
				return button;
			}
		}, this);

		return React.createElement(Button, {
			onClick: _.bind(function () {
				var nextItem = _.findWhere(this.props.buttons, { _value: item._value });
				this.onButtonItemClicked(nextItem._value);
			}, this),
			className: className,
			icon: item._icon,
			toolTip: item.toolTip,
			toolTipPosition: item.toolTipPosition
		});
	},

	getButtonItems: function getButtonItems() {
		if (this.props.buttons.length === 2 && this.props.shouldUseToggle) {
			return this.getButtonToggle();
		} else {
			return this.getButtons();
		}
	},

	onButtonItemClicked: function onButtonItemClicked(value) {

		this.setState({
			_value: value
		});

		this.props.onChange(value);
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