'use strict';

var React = require('react');
var Button = require('../buttons/button');
var classNames = require('classnames');

var DropDown = React.createClass({
    displayName: 'DropDown',


    getInitialState: function getInitialState() {
        return {
            _isOpen: false
        };
    },

    getContent: function getContent() {

        if (this.state._isOpen) {
            return React.createElement(
                'div',
                { className: 'drop-down-content' },
                React.cloneElement(this.props.component, {
                    closeDropDown: this.closeDropDown
                })
            );
        }
    },

    getClassName: function getClassName() {
        return classNames('drop-down', this.props.className);
    },

    onDropDownClicked: function onDropDownClicked(event) {
        if (event) {
            event.preventDefault();
        }
        this.setState({
            _isOpen: !this.state._isOpen
        });
    },

    closeDropDown: function closeDropDown() {
        this.setState({
            _isOpen: false
        });
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: this.getClassName() },
            React.createElement(Button, { onClick: this.onDropDownClicked, icon: this.props.icon, text: this.props.text }),
            this.getContent()
        );
    }

});

module.exports = DropDown;