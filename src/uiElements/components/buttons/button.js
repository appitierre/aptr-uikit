var React = require('react');
var classNames = require('classnames');
var VisibilitySensor = require('react-visibility-sensor');

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

    getInitialState: function() {
        return {
            toolTipPosition: 0
        }
    },

    componentWillMount: function() {
        this.getToolTipPositioning();
    },

    //The button component has a set className of button and what ever className has been passed
    //in will be added on too the end.
    getButtonClassName: function() {
        if (this.props.isSmall) {
            return classNames('button', this.props.type, "small", this.props.className);
        } else {
            return classNames('button', this.props.type, this.props.className);
        };
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

    getToolTip: function() {
        if (this.props.toolTip) {
            var className = classNames('tool-tip', {
                'tool-tip-top': (this.props.toolTipPosition === 'top' || !this.props.toolTipPosition),
                'tool-tip-bottom': (this.props.toolTipPosition === 'bottom')
            })
            return (
                <VisibilitySensor onChange={this.onVisibilityChanged}>
                    <span style={{marginLeft: this.state.toolTipPosition}} ref="tool-tip" className={className}>
                    {this.props.toolTip}
                    </span>
                </VisibilitySensor>
            )
        }
    },

    getToolTipPositioning: function() {
         if (this.refs['tool-tip']) {
            var width = this.refs['tool-tip'].offsetWidth;
            this.setState({
                toolTipPosition: -Math.floor(width/2) + 'px'
            })
        }
    },

    onVisibilityChanged: function(isVisible) {
    
        if (!isVisible) {
            console.log(isVisible);
        } else {
            console.log("IS VISIBLE");
        }
    },

    onButtonMouseOver: function() {
        this.getToolTipPositioning();
    },

    render: function() {
        return (
            <button onMouseOver={this.onButtonMouseOver} disabled={this.props.disabled} className={this.getButtonClassName()} onClick={this.props.onClick}>
                {this.getToolTip()}
                {this.getLeftIcon()}
                {this.props.text}
                {this.getRightIcon()}
                {this.getToolTip()}
            </button>
        );
    }

});

module.exports = Button;