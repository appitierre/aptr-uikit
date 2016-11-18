'use strict';

var React = require('react');
var registerType = require('../helpers').registerType;
var Button = require('../../buttons/components/button');
var Button = require('../../selectOptions/components/selectOptions');
var CssValue = require('../../cssValue/components/cssValue');

var FormFieldCssValue = React.createClass({
    displayName: 'FormFieldCssValue',


    getInitialState: function getInitialState() {

        var unit = this.getInitialUnit();

        var value = this.props.value.replace(unit, '');

        if (!_.isNaN(parseInt(value))) {
            value = parseInt(value);
        }

        return {
            value: value,
            unit: unit
        };
    },

    getInitialUnit: function getInitialUnit() {
        var unit = '';
        _.each(this.props.units, function (unitOption) {

            if (this.props.value.indexOf(unitOption.value) > -1) {
                unit = unitOption.value;
            }
        }, this);

        return unit;
    },

    shouldUseCssValue: function shouldUseCssValue() {
        var currentUnitOption = _.findWhere(this.props.units, { value: this.state.unit });
        return currentUnitOption.shouldUseCssValue;
    },

    onChange: function onChange(value) {

        this.setState({
            value: value
        }, function () {
            this.updateField();
        });
    },

    onIncrease: function onIncrease(value) {
        this.setState({
            value: this.state.value + value
        }, function () {
            this.updateField();
        });
    },

    onDecrease: function onDecrease(value) {
        this.setState({
            value: this.state.value - value
        }, function () {
            this.updateField();
        });
    },

    onUnitChange: function onUnitChange(event) {
        var value = event.target.value;
        var currentUnitOption = _.findWhere(this.props.units, { value: value });

        if (currentUnitOption.shouldUseCssValue) {
            value = 0;
        }

        this.setState({
            unit: event.target.value,
            value: value
        }, function () {
            this.updateField();
        });
    },

    updateField: _.throttle(function () {
        var value = this.state.value + this.state.unit;
        if (this.state.value === this.state.unit) {
            value = this.state.value;
        }
        this.props.updateField(value);
    }, 1200, { leading: false }),

    renderSelectOptions: function renderSelectOptions() {
        return _.map(this.props.units, function (unit) {
            return React.createElement(
                'option',
                {
                    value: unit.value,
                    key: unit.value },
                unit.value
            );
        }, this);
    },

    renderCssValue: function renderCssValue() {
        var shouldUseCssValue = this.shouldUseCssValue();

        if (shouldUseCssValue) {

            return React.createElement(CssValue, {
                unit: this.state.unit,
                value: this.state.value,
                onChange: this.onChange,
                onIncrease: this.onIncrease,
                onDecrease: this.onDecrease
            });
        }
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
            React.createElement(
                'select',
                { value: this.state.unit, onChange: this.onUnitChange },
                this.renderSelectOptions()
            ),
            this.renderCssValue(),
            React.createElement(
                'div',
                { className: 'form-field-error' },
                this.props.error
            )
        );
    }

});

registerType('CssValue', FormFieldCssValue);

module.exports = FormFieldCssValue;