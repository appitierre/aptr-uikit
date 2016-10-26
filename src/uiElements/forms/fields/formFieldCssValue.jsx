var React = require('react');
var registerType = require('../helpers').registerType;
import {CssValue, Button, SelectOption} from 'uiElements';

var FormFieldCssValue = React.createClass({

    getInitialState: function() {

        var unit = this.getInitialUnit();

        var value = this.props.value.replace(unit, '');

        if (!_.isNaN(parseInt(value))) {
            value = parseInt(value);
        }

        return {
            value: value,
            unit: unit
        }

    },

    getInitialUnit: function() {
        var unit = '';
        _.each(this.props.units, function(unitOption) {
            
            if (this.props.value.indexOf(unitOption.value) > -1) {
                unit = unitOption.value;
            }

        }, this);

        return unit;
    },

    shouldUseCssValue: function() {
        var currentUnitOption = _.findWhere(this.props.units, {value: this.state.unit});
        return currentUnitOption.shouldUseCssValue;
    },

    onChange: function(value) {

        this.setState({
            value: value
        }, function() {
            this.updateField();
        });

    },

    onIncrease: function(value) {
        this.setState({
            value: (this.state.value + value) 
        }, function() {
            this.updateField();
        });
    },

    onDecrease: function(value) {
        this.setState({
            value: (this.state.value - value) 
        }, function() {
            this.updateField();
        });
    },

    onUnitChange: function(event) {
        var value = event.target.value;
        var currentUnitOption = _.findWhere(this.props.units, {value: value});

        if (currentUnitOption.shouldUseCssValue) {
            value = 0;
        }

        this.setState({
            unit: event.target.value,
            value: value
        }, function() {
            this.updateField();
        })
    },

    updateField: _.throttle(function() {
        var value = this.state.value + this.state.unit;
        if (this.state.value === this.state.unit) {
            value = this.state.value;
        }
        this.props.updateField(value);
    }, 1200, {leading: false}),

    renderSelectOptions: function() {
        return _.map(this.props.units, function(unit) {
            return (
                <option 
                    value={unit.value}
                    key={unit.value}>
                    {unit.value}
                </option>
            );
        }, this);
    },

    renderCssValue: function() {
        var shouldUseCssValue = this.shouldUseCssValue();

        if (shouldUseCssValue) {

            return (
                <CssValue
                    unit={this.state.unit}
                    value={this.state.value}
                    onChange={this.onChange}
                    onIncrease={this.onIncrease}
                    onDecrease={this.onDecrease}
                />
            );
            
        }

    },

    render: function() {
        
        return (

            <div className="form-field">

                <div className="form-field-label">
                    {this.props.label}
                </div>

                <div className="form-field-help">
                    {this.props.help}
                </div>

                <select value={this.state.unit} onChange={this.onUnitChange}>
                    {this.renderSelectOptions()}
                </select>

                {this.renderCssValue()}

                <div className="form-field-error">
                    {this.props.error}
                </div>

            </div>

        );

    }

});

registerType('CssValue', FormFieldCssValue);

module.exports = FormFieldCssValue;