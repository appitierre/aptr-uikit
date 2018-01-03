'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _ = require('lodash');
var Helpers = require('../helpers');
var getType = Helpers.getType;
var getValidator = Helpers.getValidator;
var FormFieldCondition = require('../fields/formFieldCondition');

var FormField = React.createClass({
    displayName: 'FormField',


    getInitialState: function getInitialState() {
        return {
            _isSaving: false,
            _condition: null
        };
    },

    componentDidMount: function componentDidMount() {
        this._isMounted = true;
        this.testConditions(this.props);
    },

    componentWillUnmount: function componentWillUnmount() {
        this._isMounted = false;
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.testConditions(nextProps);
    },

    testConditions: function testConditions(props) {
        var _this = this;

        Helpers.testConditions(props.conditions, props, function (condition) {
            if (!_this._isMounted) {
                return;
            }
            _this.setState({ _condition: condition });
        });
    },

    validateValue: function validateValue(value) {
        var _this2 = this;

        var error = '';
        _.each(this.props.validators, function (validator) {
            error = getValidator(validator)(_this2.props.model, _this2.props.fieldKey, value);
        });

        this.setState({
            error: error
        });

        return error;
    },

    onUpdate: function onUpdate(value) {
        var _this3 = this;

        var hasError = this.validateValue(value);

        var updateObject = {};
        updateObject[this.props.fieldKey] = value;

        this.setState({
            _isSaving: true
        });

        return this.props.onUpdate(updateObject, hasError, this.props.fieldKey).then(function () {
            if (_this3._isMounted) {
                _this3.setState({
                    _isSaving: false
                });
            }
        }).catch(function () {
            if (_this3._isMounted) {
                _this3.setState({
                    _isSaving: false
                });
            }
        });
    },

    renderConditon: function renderConditon() {
        if (this.state._condition) {
            return React.createElement(FormFieldCondition, _extends({}, this.props, { condition: this.state._condition }));
        }
    },

    renderFieldComponent: function renderFieldComponent() {

        if (this.state._condition) {
            return null;
        }

        var FieldComponent = getType(this.props.type);

        if (!FieldComponent) {
            return console.warn("Looks like you're trying to render a form field (" + this.props.type + ") that doesn't exist.", "Try looking at the schema for " + this.props.fieldKey);
        }

        return React.createElement(FieldComponent, _extends({}, this.props, {
            updateField: this.onUpdate,
            isSaving: this.state._isSaving,
            error: this.state.error,
            fieldId: _.uniqueId('form-field-')
        }));
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            this.renderConditon(),
            this.renderFieldComponent()
        );
    }

});

module.exports = FormField;