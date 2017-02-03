'use strict';

var React = require('react');
var _ = require('lodash');
var registerType = require('../helpers').registerType;
var FormFieldPickerItem = require('./formFieldPickerItem.js');

var FormFieldPicker = React.createClass({
    displayName: 'FormFieldPicker',


    renderItems: function renderItems() {
        var _this = this;

        return _.map(this.props.items, function (item) {
            return React.createElement(FormFieldPickerItem, {
                key: item.value,
                item: item,
                onItemSelected: _this.updateField
            });
        });
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