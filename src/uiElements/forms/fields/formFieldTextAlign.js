var React = require('react');
var _ = require('lodash');
var registerType = require('../helpers').registerType;
var ButtonGroup = require('../../buttonGroup/components/buttonGroup');

var FormFieldTextAlign = React.createClass({

    getInitialState: function() {
        return {
            value: this.props.value || ''
        }
    },

    getButtons: function() {
        return [{
            _icon: 'text-align-left',
            _value: 'left'
        }, {
            _icon: 'text-align-center',
            _value: 'center'
        }, {
            _icon: 'text-align-right',
            _value: 'right'
        }, {
            _icon: 'text-format-remove',
            _value: ''
        }];
    },

    onChange: function(value) {

        this.setState({
            value: value
        }, function() {
            this.props.updateField(this.state.value);
        });

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

                <ButtonGroup
                    onChange={this.onChange}
                    buttonType="primary"
                    value={this.state.value}
                    shouldUseToggle={false}
                    buttons={this.getButtons()}
                />

                <div className="form-field-error">
                    {this.props.error}
                </div>

            </div>

        );

    }

});

registerType('TextAlign', FormFieldTextAlign);

module.exports = FormFieldTextAlign;