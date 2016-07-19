'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _editor = require('../editor');

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorContainer = _react2.default.createClass({
    displayName: 'EditorContainer',


    getInitialState: function getInitialState() {
        return {
            width: 100,
            unit: "PX",
            top: false,
            right: false,
            bottom: false,
            left: false
        };
    },

    onWidthChanged: function onWidthChanged(value) {
        this.setState({
            width: value
        });
    },

    onWidthIncrease: function onWidthIncrease(increaseBy) {

        if (!_.isNumber(this.state.width)) {

            this.setState({
                width: 0
            });

            return;
        }

        this.setState({
            width: this.state.width + 1 * increaseBy
        });
    },

    onWidthDecrease: function onWidthDecrease(decreaseBy) {
        this.setState({
            width: this.state.width - 1 * decreaseBy
        });
    },

    onSelectorChanged: function onSelectorChanged(top, right, bottom, left) {
        console.log(arguments);
        this.setState({
            top: top,
            right: right,
            bottom: bottom,
            left: left
        });
    },

    render: function render() {
        return _react2.default.createElement(_editor2.default, _extends({}, this.state, {
            onWidthChanged: this.onWidthChanged,
            onWidthIncrease: this.onWidthIncrease,
            onWidthDecrease: this.onWidthDecrease,
            onSelectorChanged: this.onSelectorChanged
        }));
    }

});

module.exports = EditorContainer;