var React = require('react');
var registerType = require('../helpers').registerType;
var FormFieldSelectOption = require('./formFieldSelectOption.js');

var FormFieldSelect = React.createClass({

    onChange: function(event) {
        var value = event.target.value;
        this.props.updateField(value);
    },

    renderOptions: function() {
        return _.map(this.props.options, function(option) {
            return (
                <FormFieldSelectOption
                    key={option.value}
                    option={option}
                />
            );
        }, this);
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

                <select value={this.props.value} onChange={this.onChange}>
                    {this.renderOptions()}
                </select>

                {/*<input 
                    id={this.props.fieldKey}
                    className="form-boolean-toggle"
                    type="checkbox"
                    checked={this.props.value || false}
                    onChange={this.onChange}
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                />*/}

                <label className="form-field-label" htmlFor={this.props.fieldKey}/>

                <div className="form-field-error">
                    {this.props.error}
                </div>

            </div>

        );

    }

});

registerType('Select', FormFieldSelect);

module.exports = FormFieldSelect;