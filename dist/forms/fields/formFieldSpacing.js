'use strict';

var React = require('react');
var registerType = require('../helpers').registerType;
var FormFieldSpacingItem = require('./formFieldSpacingItem.js');
var _ = require('lodash');

var Mapping = {
    top: 'Top',
    right: 'Right',
    bottom: 'Bottom',
    left: 'Left'
};

var FormFieldSpacing = React.createClass({
    displayName: 'FormFieldSpacing',


    getInitialState: function getInitialState() {
        return this.convertValueToObject();
    },

    convertValueToObject: function convertValueToObject() {

        var state = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };

        if (this.props.value) {
            var attributes = this.props.value.replace(/px/g, '').split(' ');

            _.each(Object.keys(Mapping), function (value, index) {
                state[value] = parseInt(attributes[index]);
            });
        }

        return state;
    },

    convertObjectToValue: function convertObjectToValue() {
        var cssValue = '';
        _.each(this.state, function (value, position) {
            if (position === 'left') {
                cssValue += value + 'px';
            } else {
                cssValue += value + 'px ';
            }
        });
        return cssValue;
    },

    updateField: _.debounce(function () {
        var value = this.convertObjectToValue();
        this.props.updateField(value);
    }, 600, { leading: false }),

    onChange: function onChange(updateObject) {

        this.setState(updateObject);

        this.updateField();
    },

    renderItems: function renderItems() {
        var _this = this;

        return _.map(Mapping, function (itemText, itemKey) {
            return React.createElement(FormFieldSpacingItem, {
                key: itemKey,
                position: itemKey,
                label: itemText,
                value: _this.state[itemKey],
                onChange: _this.onChange
            });
        });
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'form-field' },
            React.createElement(
                'div',
                { className: 'form-field-label', htmlFor: this.props.fieldKey },
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

registerType('Spacing', FormFieldSpacing);

module.exports = FormFieldSpacing;