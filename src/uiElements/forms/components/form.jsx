var React = require('react');
var FormField = require('./formField.jsx');

var Form = React.createClass({

    getInitialState: function() {
        var form = _.mapKeys(this.props.schema, function(val, key) {
            return {
                hasError: false
            };
        });

        return form
    },

    validateForm: function(newState) {
        var hasError = _.find(newState, function(field, fieldKey) {
            if (field.hasError) {
                return field.hasError;
            }
        })

        return hasError;
    },

    onUpdate: function(attributes, hasError, fieldKey) {

        var newFieldObject = {};
        newFieldObject[fieldKey] = {hasError: hasError};

        var newState = _.extend(this.state, newFieldObject);

        this.setState(newState);
        var hasError = this.validateForm(newState);
        return this.props.onUpdate(attributes, hasError, fieldKey);

    },

    renderTitle: function() {
        
        if (this.props.title) {
            return (
                <div className="form-title">
                    {this.props.title}
                </div>
            )
        }

        return null;

    },

    renderFields: function() {
        return _.map(this.props.schema, (schemaItem, key) => {
            var model = this.props.model || {};
            var value = model[key];
            return (
                <FormField
                    key={key}
                    {...schemaItem}
                    fieldKey={key}
                    value={value}
                    model={this.props.model}
                    form={this.props.form}
                    onUpdate={this.onUpdate}
                />
            );
        });
    },

    render: function() {
        return (
            <div className="form">
                {this.renderTitle()}
                {this.renderFields()}
            </div>
        );
    }

});

module.exports = Form;