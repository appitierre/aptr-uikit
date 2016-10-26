'use strict';

var React = require('react');
var registerType = require('../helpers').registerType;
var FormFieldPickerItem = require('./formFieldPickerItem.jsx');

var FormFieldPicker = React.createClass({
    displayName: 'FormFieldPicker',


    renderItems: function renderItems() {
        return _.map(this.props.items, function (item) {
            return React.createElement(FormFieldPickerItem, {
                key: item.value,
                item: item,
                onItemSelected: this.updateField
            });
        }, this);
    },

    updateField: function updateField(value) {
        this.props.updateField(value);
    },

    render: function render() {

        return React.createElement(
            'div',
            { className: 'form-field' },
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
            this.renderItems(),
            React.createElement(
                'div',
                { className: 'form-field-error' },
                this.props.error
            )
        );
    }

});

registerType('Picker', FormFieldPicker);

module.exports = FormFieldPicker;