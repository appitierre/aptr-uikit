'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var classNames = require('classnames');
var ToolTip = require('./toolTip');

// @props:
// {
//     icon: String
//     text: String
//     buttonType: String
//     className: String - primary, secondary and alert
//     onClick: Function, Required
//     iconPosition: String
//     disabled: Boolean
//}

var Button = React.createClass({
    displayName: 'Button',


    //The button component has a set className of button and what ever className has been passed
    //in will be added on too the end.
    getButtonClassName: function getButtonClassName() {
        return classNames('button', this.props.type, this.props.className, {
            "is-small": this.props.isSmall,
            "tool-tip-button": this.props.toolTip
        });
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

    getAccessibilityTags: function getAccessibilityTags() {
        var menuTags = '';
        if (this.props.buttonType == "menu") {
            var menuTags = this.getMenuAccessibilityTags();
        }
        var ariaLabel = this.props['aria-label'] ? this.props['aria-label'] : this.props.text;
        return _.merge({tabIndex: 0, role: 'button', 'aria-label': ariaLabel}, menuTags);
    },

    getMenuAccessibilityTags: function getMenuAccessibilityTags() {
        var ariaExpanded = this.props.isMenuOpen ? true : false;
        return {'aria-haspopup': 'menu', 'aria-expanded': ariaExpanded, 'aria-controls': this.props.id};        
    },

    renderButton: function renderButton(button) {
        if (this.props.toolTip) {
            return React.createElement(
                ToolTip,
                { toolTip: this.props.toolTip, toolTipPosition: this.props.toolTipPosition || 'top' },
                button
            );
        }
        return button;
    },

    getButtonProps: function getButtonProps() {
        return _.omit(this.props, ['type', 'text', 'icon', 'iconPosition', 'toolTip', 'toolTipPosition', 'isSmall', 'buttonType', 'isMenuOpen']);
    },

    render: function render() {
        var props = _.merge(this.getButtonProps(), this.getAccessibilityTags());
        return this.renderButton(React.createElement(
            'button',
            _extends({}, props, {
                className: this.getButtonClassName() }),
            this.getLeftIcon(),
            this.props.text,
            this.getRightIcon()
        ));
    }

});

module.exports = Button;