'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var React = require('react');
var CssValue = require('./cssValue');
var CssBorderSelector = require('./CssBorderSelector');
var CssBorderRadiusSelector = require('./CssBorderRadiusSelector');

var Editor = React.createClass({
    displayName: 'Editor',


    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(CssValue, {
                unit: this.props.unit,
                value: this.props.width,
                onChange: this.props.onWidthChanged,
                onIncrease: this.props.onWidthIncrease,
                onDecrease: this.props.onWidthDecrease
            }),
            React.createElement(CssBorderSelector, {
                top: this.props.top,
                right: this.props.right,
                bottom: this.props.bottom,
                left: this.props.left,
                onChange: this.props.onSelectorChanged,
                topIcon: 'star',
                rightIcon: 'star',
                bottomIcon: 'star',
                leftIcon: 'star',
                centreIcon: 'moon'
            }),
            React.createElement(CssBorderRadiusSelector, null)
        );
    }

});

exports.default = Editor;