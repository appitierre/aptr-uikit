'use strict';

var React = require('react');
var Sortable = require('react-sortable-hoc');
var SortableHandle = Sortable.SortableHandle;
var FormSortableItemHandle = SortableHandle(require('./formSortableItemHandle.js'));
var classnames = require('classnames');

var FormSortableItem = React.createClass({
    displayName: 'FormSortableItem',


    getClassName: function getClassName() {
        return classnames('form-sortable-item', {
            'is-selected': this.props.isSelected
        });
    },

    getItemText: function getItemText() {
        if (this.props.itemTextAttribute) {
            if (this.props.item[this.props.itemTextAttribute]) {
                return this.props.item[this.props.itemTextAttribute];
            } else {
                return this.props.defaultPrefix + " " + (this.props.sortIndex + 1);
            }
        } else {
            console.warn("Sortable items need a itemTextAttribute to display text. This is the attribute you would like the item to use to display the text.");
        }
    },

    onClick: function onClick(event) {
        event.preventDefault();
        this.props.onClick(this.props.sortIndex);
    },

    render: function render() {
        return React.createElement(
            'li',
            { className: this.getClassName() },
            React.createElement(
                'div',
                { className: 'form-sortable-item-inner' },
                React.createElement(FormSortableItemHandle, null),
                React.createElement(
                    'div',
                    { className: 'form-sortable-item-text', onClick: this.onClick },
                    this.getItemText()
                )
            )
        );
    }

});

module.exports = FormSortableItem;