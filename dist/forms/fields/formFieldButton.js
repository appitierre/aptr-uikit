'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = require('../../buttons/components/button');


var FormFieldButton = _react2.default.createClass({
    displayName: 'FormFieldButton',


    onButtonClicked: function onButtonClicked(event) {
        event.preventDefault();
        if (this.props.form && this.props.form.actions[this.props.buttonAction]) {
            this.props.form.actions[this.props.buttonAction]();
        } else {
            console.warn("Seems as though a button action is missing or doesn't match the schema");
        }
    },

    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'form-field' },
            _react2.default.createElement(
                'label',
                { className: 'form-field-label' },
                this.props.label
            ),
            _react2.default.createElement(
                'div',
                { className: 'form-field-help' },
                this.props.help
            ),
            _react2.default.createElement(Button, {
                onClick: this.onButtonClicked,
                icon: this.props.buttonIcon,
                type: this.props.buttonType,
                text: this.props.buttonText }),
            _react2.default.createElement(
                'div',
                { className: 'form-field-error' },
                this.props.error
            )
        );
    }

});

(0, _helpers.registerType)('Button', FormFieldButton);

exports.default = FormFieldButton;