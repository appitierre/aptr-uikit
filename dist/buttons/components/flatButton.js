'use strict';

var React = require('react');
var classNames = require('classnames');
var ToolTip = require('./toolTip');

//## Flat Button

// @PROPS:
// ClassName: String,
// Icon: String,
// onClick: Function, 

var FlatButton = React.createClass({
	displayName: 'FlatButton',


	//The flat button component has a set className of button and what ever className has been passed
	//in will be added on too the end.
	getButtonClassName: function getButtonClassName() {
		return classNames('button-flat', this.props.type, this.props.className, {
			"tool-tip-button": this.props.toolTip
		});
	},

	//Similar to the button className function, this takes in an icon prop. Make sure that the icon you pass in is
	//part of the linear icon pack.
	getIcon: function getIcon() {
		return React.createElement('i', { className: ' icon icon-' + this.props.icon, style: this.getStyle() });
	},

	getText: function getText() {
		if (this.props.text) {
			return React.createElement(
				'span',
				{ className: 'flat-button-text' },
				this.props.text
			);
		}
	},

	getStyle: function getStyle() {
		if (this.props.text && this.props.icon) {
			return {
				marginRight: 5
			};
		}
	},

	renderButton: function renderButton(button) {
		if (this.props.toolTip) {
			return React.createElement(
				ToolTip,
				{ toolTip: this.props.toolTip, toolTipPosition: this.props.toolTipPosition },
				button
			);
		}
		return button;
	},

	//Renders the entire flat button.
	render: function render() {
		return this.renderButton(React.createElement(
			'button',
			{ disabled: this.props.disabled, className: this.getButtonClassName(), onClick: this.props.onClick },
			this.getIcon(),
			this.getText()
		));
	}

});

module.exports = FlatButton;