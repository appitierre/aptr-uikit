var React = require('react');
var _ = require('lodash');
var registerType = require('../helpers').registerType;
var FormFieldPickerItem = require('./formFieldPickerItem.js');

var FormFieldPicker = React.createClass({

    renderItems: function() {
        return _.map(this.props.items, (item) => {
            return (
                <FormFieldPickerItem
                    key={item.value}
                    item={item}
                    onItemSelected={this.updateField}
                />
            );
        })
    },

    updateField: function(value) {
        this.props.updateField(value);
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

                {this.renderItems()}

                <div className="form-field-error">
                    {this.props.error}
                </div>

            </div>

        );

    }

});

registerType('Picker', FormFieldPicker);

module.exports = FormFieldPicker;