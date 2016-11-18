'use strict';

var React = require('react');
var registerType = require('../helpers').registerType;
var Form = require('../components/form.js');
var FormSortable = require('../components/formSortable.js');
var Button = require('../../buttons/components/button');

var FormFieldArray = React.createClass({
    displayName: 'FormFieldArray',


    getInitialState: function getInitialState() {
        return {
            selectedItemIndex: 0
        };
    },

    onSorted: function onSorted(items, data) {

        this.setState({
            selectedItemIndex: data.newIndex
        });

        return this.props.updateField(items);
    },

    onItemClicked: function onItemClicked(index) {

        this.setState({
            selectedItemIndex: index
        });
    },

    onAddClicked: function onAddClicked(event) {
        event.preventDefault();
        var items = this.props.value || [];
        var newItem = { itemIndex: items.length };
        items.push(newItem);

        return this.props.updateField(items).then(_.bind(function () {
            this.setState({
                selectedItemIndex: items.length - 1
            });
        }, this));
    },

    onOptionItemUpdated: function onOptionItemUpdated(attributes, hasError, fieldKey) {
        var items = this.props.value || [];

        _.extend(items[this.state.selectedItemIndex], attributes);

        return this.props.updateField(items);
    },

    onDeleteItemClicked: function onDeleteItemClicked() {
        this.props.value.splice(this.state.selectedItemIndex, 1);
        // Once removing one - update the itemIndex
        _.each(this.props.value, function (item, index) {
            item.itemIndex = index;
        });

        this.setState({
            selectedItemIndex: this.state.selectedItemIndex - 1
        });
        return this.props.updateField(this.props.value);
    },

    renderItemForm: function renderItemForm() {
        var value = this.props.value || [];

        var selectedItemModel = value[this.state.selectedItemIndex];

        if (!selectedItemModel) {
            return null;
        }

        return React.createElement(
            'div',
            null,
            React.createElement(Form, {
                key: this.state.selectedItemIndex,
                model: selectedItemModel,
                schema: this.props.subSchema,
                onUpdate: this.onOptionItemUpdated,
                form: _.assign({}, this.props.form || {}, {
                    selectedItemModel: selectedItemModel
                })
            }),
            this.renderDeleteButton()
        );
    },

    renderDeleteButton: function renderDeleteButton() {
        return React.createElement(
            'div',
            null,
            React.createElement(Button, {
                onClick: this.onDeleteItemClicked,
                text: this.props.deleteButtonText,
                icon: 'trash',
                type: 'alert'
            })
        );
    },

    render: function render() {

        return React.createElement(
            'div',
            { className: 'form-field form-field-array clearfix' },
            React.createElement(
                'div',
                { className: 'form-field-array-items' },
                React.createElement(
                    'div',
                    { className: 'form-field-label' },
                    this.props.label
                ),
                React.createElement(
                    'div',
                    { className: 'form-field-help' },
                    this.props.help
                ),
                React.createElement(FormSortable, {
                    items: this.props.value || [],
                    itemTextAttribute: this.props.itemTextAttribute || "label",
                    defaultPrefix: this.props.defaultPrefix || "Item",
                    selectedItemIndex: this.state.selectedItemIndex,
                    onSort: this.onSorted,
                    onClick: this.onItemClicked
                }),
                React.createElement(
                    'div',
                    null,
                    React.createElement(Button, {
                        type: 'primary',
                        onClick: this.onAddClicked,
                        text: this.props.addButtonText
                    })
                )
            ),
            React.createElement(
                'div',
                { className: 'form-field-array-item-form' },
                this.renderItemForm()
            )
        );
    }

});

registerType('Array', FormFieldArray);

module.exports = FormFieldArray;