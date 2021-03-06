var React = require('react');
var _ = require('lodash');
var registerType = require('../helpers').registerType;

var FormFieldTextAreaPlain = React.createClass({

    getInitialState: function() {
        return {
            value: this.props.value || ''
        }
    },

    onChange: function(event) {
        var value = event.target.value;
        var that = this;

        this.setState({
            value: value
        });

        this.updateField();

    },

    updateField: _.debounce(function() {
        this.props.updateField(this.state.value);
    }, 600, {leading: false}),

    render: function() {
        
        return (


            <div className="form-field">

                <label className="form-field-label" htmlFor={this.props.fieldKey}>
                    {this.props.label}
                </label>

                <div className="form-field-help">
                    {this.props.help}
                </div>

                <textarea 
                    id={this.props.fieldKey}
                    className="form-field-input"
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                />

                <div className="form-field-error">
                    {this.props.error}
                </div>

            </div>

        );

    }

});

registerType('TextArea:Plain', FormFieldTextAreaPlain);

module.exports = FormFieldTextAreaPlain;