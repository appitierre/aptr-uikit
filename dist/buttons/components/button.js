'use strict';

var React = require('react');
var classNames = require('classnames');

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
    displayName: 'Button',


    getInitialState: function getInitialState() {
        return {
            toolTipPosition: 0
        };
    },

    componentWillMount: function componentWillMount() {
        this.getToolTipPositioning();
    },

    //The button component has a set className of button and what ever className has been passed
    //in will be added on too the end.
    getButtonClassName: function getButtonClassName() {
        if (this.props.isSmall) {
            return classNames('button', this.props.type, this.props.className, 'is-small');
        } else {
            return classNames('button', this.props.type, this.props.className);
        };
    },

    getIconPositionClassName: function getIconPositionClassName(position) {
        return classNames('button-icon-position-' + position, this.getIconClassName());
    },

    //Similar to the button className function, this takes in an icon prop. Make sure that the icon you pass in is
    //part of the linear icon pack.
    getIconClassName: function getIconClassName() {
        return classNames('icon', 'icon-' + this.props.icon);
    },

    getLeftIcon: function getLeftIcon() {
        if (this.props.icon) {
            if (this.props.iconPosition === 'left' || !this.props.iconPosition) {
                if (!this.props.text) {
                    return React.createElement(
                        'i',
                        { className: this.getIconClassName() },
                        ' '
                    );
                }
                return React.createElement(
                    'i',
                    { className: this.getIconPositionClassName('left') },
                    ' '
                );
            }
        }
    },

    //IconPosition should only be string with right or left, without it the position of the icon
    //will default to left.
    getRightIcon: function getRightIcon() {
        if (this.props.icon && this.props.iconPosition === 'right') {
            return React.createElement(
                'i',
                { className: this.getIconPositionClassName(this.props.iconPosition) },
                ' '
            );
        }
    },

    getToolTip: function getToolTip() {
        if (this.props.toolTip) {
            var className = classNames('tool-tip', {
                'tool-tip-top': this.props.toolTipPosition === 'top' || !this.props.toolTipPosition,
                'tool-tip-bottom': this.props.toolTipPosition === 'bottom'
            });
            return React.createElement(
                'span',
                { style: { marginLeft: this.state.toolTipPosition }, ref: 'tool-tip', className: className },
                this.props.toolTip
            );
        }
    },

    getToolTipPositioning: function getToolTipPositioning() {
        if (this.refs['tool-tip']) {
            var width = this.refs['tool-tip'].offsetWidth;
            this.setState({
                toolTipPosition: -Math.floor(width / 2) + 'px'
            });
        }
    },

    onButtonMouseOver: function onButtonMouseOver() {
        this.getToolTipPositioning();
    },

    render: function render() {
        return React.createElement(
            'button',
            { onMouseOver: this.onButtonMouseOver, disabled: this.props.disabled, className: this.getButtonClassName(), onClick: this.props.onClick },
            this.getToolTip(),
            this.getLeftIcon(),
            this.props.text,
            this.getRightIcon(),
            this.getToolTip()
        );
    }

});

module.exports = Button;