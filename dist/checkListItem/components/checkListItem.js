'use strict';

var React = require('react');
var classNames = require('classnames');

var CheckListItem = React.createClass({
    displayName: 'CheckListItem',


    propTypes: {
        isChecked: React.PropTypes.bool.isRequired,
        onCheck: React.PropTypes.func.isRequired
    },

    onChange: function onChange(event) {
        this.props.onCheck(event.target.checked);
    },

    getClassName: function getClassName() {
        return classNames('check-list-item', {
            "isChecked": this.props.isChecked
        });
    },

    render: function render() {
        return React.createElement(
            'li',
            { className: this.getClassName() },
            React.createElement(
                'div',
                { className: 'check-list-item-input' },
                React.createElement('input', { type: 'checkbox', checked: this.props.isChecked, onChange: this.onChange })
            ),
            React.createElement(
                'div',
                { className: 'check-list-item-content' },
                this.props.children
            )
        );
    }

});

module.exports = CheckListItem;