var React = require('react');

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
        var className = 'button';
        if (this.props.type) {
            className += " " + this.props.type;
        } 
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return className;
    },

    getIconPositionClassName: function(position) {
        return 'button-icon-position-' + position + ' ' + this.getIconClassName()
    },

    //Similar to the button className function, this takes in an icon prop. Make sure that the icon you pass in is
    //part of the linear icon pack.
    getIconClassName: function() {
        return 'icon icon-' + this.props.icon;
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

    getTopToolTip: function() {
        if (this.props.toolTip) {
            if (this.props.toolTipPosition === 'top' || !this.props.toolTipPosition) {
                return (
                    <div className="tool-tip-top">
                        {this.props.toolTip}
                    </div>
                )
            }
        }
    },

    getBottomToolTip: function() {
        if (this.props.toolTip) {
            if (this.props.toolTipPosition === 'bottom') {
                return (
                    <span className="tool-tip-bottom">
                        {this.props.toolTip}
                    </span>
                )
            }
        }
    },    

    render: function() {
        return (
            <button disabled={this.props.disabled} className={this.getButtonClassName()} onClick={this.props.onClick}>
                    {this.getTopToolTip()}
                {this.getLeftIcon()}
                {this.props.text}
                {this.getRightIcon()}
                    {this.getBottomToolTip()}
            </button>
        );
    }

});

module.exports = Button;