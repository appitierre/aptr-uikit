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
				icon: item._icon
			});
		}, this);
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
			this.getButtons()
		);
	}

});

module.exports = ButtonGroup;