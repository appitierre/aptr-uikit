var React = require('react');
var _ = require('lodash');
var registerType = require('../helpers').registerType;

var FormFieldText = React.createClass({

    getInitialState: function() {
        return {
            value: this.props.value || ''
        }
    },

    onChange: function(event) {
        var value = event.target.value;

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

                <label className="form-field-label">
                    {this.props.label}
                </label>

                <p className="form-field-help">
                    {this.props.help}
                </p>

                <input 
                    id={this.props.fieldKey}
                    className="form-field-input"
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                />

                <p className="form-field-error">
                    {this.props.error}
                </p>

            </div>

        );

    }

});

registerType('Text', FormFieldText);

module.exports = FormFieldText;