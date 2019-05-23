var React = require('react');
var classNames = require('classnames');
var ToolTip = require('./toolTip');

//## Flat Button

// @PROPS:
// ClassName: String,
// Icon: String,
// onClick: Function, 

var FlatButton = React.createClass({

	//The flat button component has a set className of button and what ever className has been passed
    //in will be added on too the end.
	getButtonClassName: function() {
        return classNames('button-flat', this.props.type, this.props.className, {
			"tool-tip-button" : this.props.toolTip
		});
	},

	//Similar to the button className function, this takes in an icon prop. Make sure that the icon you pass in is
    //part of the linear icon pack.
	getIcon: function() {
		return (
			<i className={' icon icon-' + this.props.icon} style={this.getStyle()}></i>
		)
	},

	getText: function() {
		if (this.props.text) {	
			return (
				<span className="flat-button-text">	
					{this.props.text}
				</span>
			)
		}
	},

	getStyle: function() {
		if (this.props.text && this.props.icon) {
			return ({
				marginRight: 5
			})
		}
	},

	getAccessibilityTags: function() {
		var name = this.props.text;
		if (!this.props.text || this.props.ariaLabel || this.props['aria-label']) {
			if (this.props.ariaLabel || this.props['aria-label']) {
				var name = this.props.ariaLabel;
			} else {
				var name = this.props.toolTip ? this.props.toolTip : this.props.icon.replace(/[0-9]/g, '');
			}
		}
        return {tabIndex: 0, role: 'button', 'aria-label': name};
    },

	renderButton: function(button) {
		if(this.props.toolTip) {
			return (
				<ToolTip toolTip={this.props.toolTip} toolTipPosition={this.props.toolTipPosition}>
					{button}
				</ToolTip>
			)
		}
		return button
	},

	getButtonProps: function() {
        return _.omit(this.props, ['type', 'text', 'icon', 'toolTip', 'toolTipPosition']);
    },

	//Renders the entire flat button.
	render: function() {
        var props = _.merge(this.getButtonProps(), this.getAccessibilityTags());
		return this.renderButton(
			<button {...props} className={this.getButtonClassName()}>
				{this.getIcon()}
				{this.getText()}				
			</button>
		);
	}

});

module.exports = FlatButton;