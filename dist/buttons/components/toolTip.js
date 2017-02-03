'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var _ = require('lodash');

var ToolTip = React.createClass({
    displayName: 'ToolTip',


    propTypes: {
        toolTipPosition: React.PropTypes.oneOf(['top', 'bottom']).isRequired,
        toolTip: React.PropTypes.string.isRequired
    },

    getInitialState: function getInitialState() {
        return {
            toolTipPosition: null
        };
    },

    componentWillMount: function componentWillMount() {
        window.addEventListener('resize', this.onWindowResize);
    },

    componentWillUnmount: function componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    },

    componentDidMount: function componentDidMount() {
        this.setDefaultPosition();
    },

    setDefaultPosition: function setDefaultPosition() {

        var toolTipWidth = ReactDOM.findDOMNode(this.refs.tooltip).offsetWidth;
        var buttonWidth = ReactDOM.findDOMNode(this).offsetWidth;
        var overlap = toolTipWidth - buttonWidth;

        if (overlap > 0) {
            this._overlap = overlap / 2;
            this.setToolTipPosition();
        }
    },

    setToolTipPosition: function setToolTipPosition() {
        if (!this._overlap) {
            return null;
        }

        var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        var windowWidth = window.innerWidth;
        var position = null;

        if (rect.right + this._overlap >= windowWidth) {
            position = 'left';
        } else if (rect.left - this._overlap <= 0) {
            position = 'right';
        }

        this.setState({
            toolTipPosition: position
        });
    },

    getClassName: function getClassName() {
        return classNames("tool-tip", {
            "tool-tip-top": this.props.toolTipPosition === 'top',
            "tool-tip-bottom": this.props.toolTipPosition === 'bottom',
            "tool-tip-left": this.state.toolTipPosition === 'left',
            "tool-tip-right": this.state.toolTipPosition === 'right'
        });
    },

    onWindowResize: _.debounce(function () {
        this.setToolTipPosition();
    }, 300, { leading: false }),

    getToolTip: function getToolTip() {
        return React.createElement(
            'span',
            { className: this.getClassName(), key: 'tooltip', ref: 'tooltip' },
            this.props.toolTip
        );
    },

    render: function render() {

        if (!this.props.children) {
            return null;
        }

        return React.cloneElement(this.props.children, {}, [this.getToolTip()].concat(_toConsumableArray(this.props.children.props.children || [])));
    }

});

module.exports = ToolTip;