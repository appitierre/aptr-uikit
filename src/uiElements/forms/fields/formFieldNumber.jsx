var React = require('react');
var registerType = require('../helpers').registerType;

var FormFieldNumber = React.createClass({

    getInitialState: function() {
        return {
            value: this.props.value
        }
    },

    onChange: function(event) {
        var value = parseInt(event.target.value);

        var that = this;

        this.setState({
            value: value
        });

        this.updateField();

    },

    updateField: _.throttle(function() {
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
                    type="number"
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

registerType('Number', FormFieldNumber);

module.exports = FormFieldNumber;