var React = require('react');
var classNames = require('classnames');
var ToolTip = require('./toolTip');


// @props:
// {
//     icon: String
//     text: String
//     className: String - primary, secondary and alert
//     onClick: Function, Required
//     iconPosition: String 
//     disabled: Boolean
//}

var Button = React.createClass({

    //The button component has a set className of button and what ever className has been passed
    //in will be added on too the end.
    getButtonClassName: function() {
        return classNames('button', this.props.type, this.props.className, {
            "is-small" : this.props.isSmall,
            "tool-tip-button": this.props.toolTip
        });
    },

    getIconPositionClassName: function(position) {
        return classNames('button-icon-position-' + position, this.getIconClassName());
    },

    //Similar to the button className function, this takes in an icon prop. Make sure that the icon you pass in is
    //part of the linear icon pack.
    getIconClassName: function() {
        return classNames(
            'icon', 
            'icon-' + this.props.icon
        );
    },

    getLeftIcon: function() {
        if (this.props.icon) {
            if (this.props.iconPosition === 'left' || !this.props.iconPosition) {
                if (!this.props.text) {
                    return (
                        <i className={this.getIconClassName()}> </i>
                    );
                }
                return (
                    <i className={this.getIconPositionClassName('left')}> </i>
                );
            }
        }
    },

    //IconPosition should only be string with right or left, without it the position of the icon
    //will default to left. 
    getRightIcon: function() {
        if (this.props.icon && this.props.iconPosition === 'right') {
            return (
                <i className={this.getIconPositionClassName(this.props.iconPosition)}> </i>
            );
        }
    },

    renderButton: function(button) {
        if(this.props.toolTip) {
            return (
                <ToolTip toolTip={this.props.toolTip} toolTipPosition={this.props.toolTipPosition || 'top'}>
                    {button}
                </ToolTip>
            )
        }
        return button;
    },

    render: function() {
        return this.renderButton(
            <button 
                disabled={this.props.disabled} 
                className={this.getButtonClassName()} 
                onClick={this.props.onClick}>
                {this.getLeftIcon()}
                {this.props.text}
                {this.getRightIcon()}
            </button>
        );
    }

});

module.exports = Button;