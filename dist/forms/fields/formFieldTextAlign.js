'use strict';

var React = require('react');
var registerType = require('../helpers').registerType;
var ButtonGroup = require('../../buttonGroup/components/buttonGroup');

var FormFieldTextAlign = React.createClass({
    displayName: 'FormFieldTextAlign',


    getInitialState: function getInitialState() {
        return {
            value: this.props.value || ''
        };
    },

    getButtons: function getButtons() {
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

    onChange: function onChange(value) {

        this.setState({
            value: value
        }, function () {
            this.props.updateField(this.state.value);
        });
    },

    updateField: _.throttle(function () {
        this.props.updateField(this.state.value);
    }, 1200, { leading: false }),

    render: function render() {

        return React.createElement(
            'div',
            { className: 'form-field' },
            React.createElement(
                'div',
                { className: 'form-field-label' },
                this.props.label
            ),
            React.createElement(
                'div',
                { className: 'form-field-help' },
                this.props.help
            ),
            React.createElement(ButtonGroup, {
                onChange: this.onChange,
                buttonType: 'primary',
                value: this.state.value,
                shouldUseToggle: false,
                buttons: this.getButtons()
            }),
            React.createElement(
                'div',
                { className: 'form-field-error' },
                this.props.error
            )
        );
    }

});

registerType('TextAlign', FormFieldTextAlign);

module.exports = FormFieldTextAlign;