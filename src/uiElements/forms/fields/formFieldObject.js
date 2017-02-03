var React = require('react');
var _ = require('lodash');
var registerType = require('../helpers').registerType;
var Form = require('../components/form.js');

var FormFieldObject = React.createClass({

    renderFormFields: function() {
        var value = (this.props.value || {});

        return (
            <Form
                onUpdate={this.onUpdateField}
                schema={this.props.subSchema}
                model={value}
                form={this.props.form}
            />
        );

    },

    onUpdateField: function(attributes, hasError, fieldKey) {
        var value = (this.props.value || {});
        var newValue = _.extend(value, attributes);
        return this.props.updateField(newValue);
    },

    render: function() {
        
        return (


            <div className="form-field form-field-object">

                <div className="form-field-label">
                    {this.props.label}
                </div>

                <div className="form-field-help">
                    {this.props.help}
                </div>

                {this.renderFormFields()}

                <div className="form-field-error">
                    {this.props.error}
                </div>

            </div>

        );

    }

});

registerType('Object', FormFieldObject);

module.exports = FormFieldObject;