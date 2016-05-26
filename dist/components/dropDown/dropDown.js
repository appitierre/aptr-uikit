'use strict';

var React = require('react');
var Button = require('../buttons/button');

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
                this.props.component
            );
        }
    },

    onDropDownClicked: function onDropDownClicked(event) {

        if (event) {
            event.preventDefault();
        }
        this.setState({
            _isOpen: !this.state._isOpen
        });
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'drop-down' },
            React.createElement(Button, { onClick: this.onDropDownClicked, icon: this.props.icon, text: this.props.text }),
            this.getContent()
        );
    }

});

module.exports = DropDown;