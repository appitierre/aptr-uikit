var React = require('react');
var registerType = require('../helpers').registerType;
var FormFieldSpacingItem = require('./formFieldSpacingItem.js');
var _ = require('lodash');

var Mapping = {
    top: 'Top',
    right: 'Right',
    bottom: 'Bottom',
    left: 'Left'
}

var FormFieldSpacing = React.createClass({

    getInitialState: function() {
        return this.convertValueToObject()
    },

    convertValueToObject: function() {

        var state = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }

        if (this.props.value) {
            var attributes = this.props.value.replace(/px/g, '').split(' ');

            _.each(Object.keys(Mapping), function(value, index) {
                state[value] = parseInt(attributes[index]);
            });
        }

        return state;

    },

    convertObjectToValue: function() {
        var cssValue = '';
        _.each(this.state, function(value, position) {
            if (position === 'left') {
                cssValue += value + 'px';
            } else {
                cssValue += value + 'px ';
            }
        });
        return cssValue;
    },

    updateField: _.throttle(function() {
        var value = this.convertObjectToValue();
        this.props.updateField(value);
    }, 1200, {leading: false}),

    onChange: function(updateObject) {

        this.setState(updateObject);

        this.updateField();

    },

    renderItems: function() {
        return _.map(Mapping, function(itemText, itemKey) {
            return (
                <FormFieldSpacingItem
                    key={itemKey}
                    position={itemKey}
                    label={itemText}
                    value={this.state[itemKey]}
                    onChange={this.onChange}
                />
            );
        }, this)
    },

    render: function() {
        return (


            <div className="form-field">

                <div className="form-field-label" htmlFor={this.props.fieldKey}>
                    {this.props.label}
                </div>

                <div className="form-field-help">
                    {this.props.help}
                </div>

                {this.renderItems()}

                <div className="form-field-error">
                    {this.props.error}
                </div>

            </div>

        );

    }

});

registerType('Spacing', FormFieldSpacing);

module.exports = FormFieldSpacing;