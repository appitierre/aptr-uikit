'use strict';

var React = require('react');

//## Flat Button

// @PROPS:
// ClassName: String,
// Icon: String,
// onClick: Function,

var FlatButton = React.createClass({
	displayName: 'FlatButton',


	getInitialState: function getInitialState() {
		return {
			toolTipPosition: 0
		};
	},

	//The flat button component has a set className of button and what ever className has been passed
	//in will be added on too the end.
	getButtonClassName: function getButtonClassName() {
		var className = 'button-flat';
		if (this.props.type) {
			className += " " + this.props.type;
		}
		if (this.props.className) {
			className += " " + this.props.className;
		}
		return className;
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

	getTopToolTip: function getTopToolTip() {
		if (this.props.toolTip) {
			if (this.props.toolTipPosition === 'top' || !this.props.toolTipPosition) {
				return React.createElement(
					'span',
					{ style: { marginLeft: this.state.toolTipPosition }, ref: 'tool-tip', className: 'tool-tip tool-tip-top' },
					this.props.toolTip
				);
			}
		}
	},

	getBottomToolTip: function getBottomToolTip() {
		if (this.props.toolTip) {
			if (this.props.toolTipPosition === 'bottom') {
				return React.createElement(
					'span',
					{ style: { marginLeft: this.state.toolTipPosition }, ref: 'tool-tip', className: 'tool-tip tool-tip-bottom' },
					this.props.toolTip
				);
			}
		}
	},

	onButtonMouseOver: function onButtonMouseOver() {
		if (this.refs['tool-tip']) {
			var width = this.refs['tool-tip'].offsetWidth;
			this.setState({
				toolTipPosition: -Math.floor(width / 2) + 'px'
			});
		}
	},

	//Renders the entire flat button.
	render: function render() {
		return React.createElement(
			'button',
			{ onMouseOver: this.onButtonMouseOver, className: this.getButtonClassName(), onClick: this.props.onClick },
			this.getTopToolTip(),
			this.getIcon(),
			this.getText(),
			this.getBottomToolTip()
		);
	}

});

module.exports = FlatButton;