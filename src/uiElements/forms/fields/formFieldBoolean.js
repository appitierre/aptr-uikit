var React = require('react');
var _ = require('lodash');
var registerType = require('../helpers').registerType;


var FormFieldBoolean = React.createClass({

    onChange: function(event) {
        var value = event.target.checked;
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

                <input 
                    id={this.props.fieldId}
                    className="form-field-boolean-toggle"
                    type="checkbox"
                    checked={this.props.value || false}
                    onChange={this.onChange}
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                />

                <label className="form-field-label" htmlFor={this.props.fieldId}/>

                <div className="form-field-error">
                    {this.props.error}
                </div>

            </div>

        );

    }

});

registerType('Boolean', FormFieldBoolean);

module.exports = FormFieldBoolean;