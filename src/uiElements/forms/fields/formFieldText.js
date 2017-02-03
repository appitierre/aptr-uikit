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
    }, 1200, {leading: false}),

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

registerType('Text', FormFieldText);

module.exports = FormFieldText;