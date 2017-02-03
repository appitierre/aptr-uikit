'use strict';

var React = require('react');
var classNames = require('classnames');
var Button = require('../../buttons/components/button');

var CssValue = React.createClass({
    displayName: 'CssValue',


    getInitialState: function getInitialState() {
        return {
            isShiftKeyDown: false
        };
    },

    getClassName: function getClassName() {
        if (this.props.isSmall) {
            return classNames('css-value clearfix', this.props.className, 'is-small');
        } else {
            return classNames('css-value clearfix', this.props.className);
        };
    },

    onInputKeyDown: function onInputKeyDown(event) {
        var keyCode = event.keyCode;

        if (keyCode === 16) {
            this.setState({
                isShiftKeyDown: true
            });
        }

        if (this.state.isShiftKeyDown && keyCode === 38) {

            this.props.onIncrease(10);
        } else if (this.state.isShiftKeyDown && keyCode === 40) {

            this.props.onDecrease(10);
        } else if (keyCode === 38) {

            this.props.onIncrease(1);
        } else if (keyCode === 40) {

            this.props.onDecrease(1);
        }
    },

    onInputKeyUp: function onInputKeyUp(event) {
        var keyCode = event.keyCode;

        if (keyCode === 16) {
            this.setState({
                isShiftKeyDown: false
            });
        }
    },

    onChange: function onChange(event) {
        this.props.onChange(event.target.value);
    },

    onIncrease: function onIncrease(event) {
        event.preventDefault();
        this.props.onIncrease(1);
    },

    onDecrease: function onDecrease(event) {
        event.preventDefault();
        this.props.onDecrease(1);
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: this.getClassName() },
            React.createElement('input', {
                className: 'css-value-input',
                value: this.props.value,
                onChange: this.onChange,
                onKeyDown: this.onInputKeyDown,
                onKeyUp: this.onInputKeyUp }),
            React.createElement(
                'div',
                { className: 'css-value-unit' },
                this.props.unit
            ),
            React.createElement(
                'div',
                { className: 'css-value-buttons' },
                React.createElement(Button, {
                    onClick: this.onIncrease,
                    icon: 'chevron-up',
                    type: 'primary',
                    isSmall: this.props.isSmall
                }),
                React.createElement(Button, {
                    onClick: this.onDecrease,
                    icon: 'chevron-down',
                    type: 'primary',
                    isSmall: this.props.isSmall
                })
            )
        );
    }

});

module.exports = CssValue;