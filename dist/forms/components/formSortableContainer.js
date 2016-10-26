'use strict';

var React = require('react');
var Sortable = require('react-sortable-hoc');
var SortableElement = Sortable.SortableElement;
var FormSortableItem = SortableElement(require('./formSortableItem.jsx'));

var FormSortableContainer = React.createClass({
    displayName: 'FormSortableContainer',


    getItems: function getItems() {
        var _this = this;

        return _.map(this.props.items, function (item, index) {
            var isSelected = false;
            if (_this.props.selectedItemIndex === index) {
                isSelected = true;
            }
            return React.createElement(FormSortableItem, {
                key: 'item-' + index,
                index: index,
                item: item,
                itemTextAttribute: _this.props.itemTextAttribute,
                defaultPrefix: _this.props.defaultPrefix,
                onClick: _this.props.onClick,
                isSelected: isSelected });
        });
    },

    render: function render() {
        return React.createElement(
            'ul',
            { className: 'form-sortable' },
            this.getItems()
        );
    }

});

module.exports = FormSortableContainer;