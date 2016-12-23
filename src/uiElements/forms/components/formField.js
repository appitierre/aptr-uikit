var React = require('react');
var _ = require('lodash');
var Helpers = require('../helpers');
var getType = Helpers.getType; 
var getValidator = Helpers.getValidator;
var FormFieldCondition = require('../fields/formFieldCondition');

var FormField = React.createClass({

    getInitialState: function() {
        return {
            _isSaving: false,
            _condition: null
        }
    },

    componentDidMount: function() {
        this.testConditions(this.props);
    },

    componentWillReceiveProps: function(nextProps) {
        this.testConditions(nextProps);
    },

    testConditions: function(props) {
        Helpers.testConditions(props.conditions, props, (condition) => {    
            if(!this.isMounted()) {
                return;
            }
            this.setState({_condition: condition})                          
        });
    },

    validateValue: function(value) {
        var error = '';
        _.each(this.props.validators, (validator) => {
            error = getValidator(validator)(this.props.model, this.props.fieldKey, value);
        });

        this.setState({
            error: error
        });

        return error;

    },

    onUpdate: function(value) {
        var hasError = this.validateValue(value);
        
        var updateObject = {};
        updateObject[this.props.fieldKey] = value;


        this.setState({
            _isSaving: true
        });

        return this.props
        .onUpdate(updateObject, hasError, this.props.fieldKey)
        .then(() => {
            if (this.isMounted()) {
                this.setState({
                    _isSaving: false
                });
            }
        })
        .catch(() => {
            if (this.isMounted()) {
                this.setState({
                    _isSaving: false
                });
            }
        });
        
    },

    renderConditon: function() {
        if(this.state._condition) {
            return (
                <FormFieldCondition {...this.props} condition={this.state._condition}/>
            )
        }
    },

    renderFieldComponent: function() {

        if(this.state._condition) {
            return null;
        }

        var FieldComponent = getType(this.props.type);
        
        if (!FieldComponent) {
            return console.warn("Looks like you're trying to render a form field (" + this.props.type +") that doesn't exist.", "Try looking at the schema for " + this.props.fieldKey);
        }
        
        return (
            <FieldComponent
                {...this.props}
                updateField={this.onUpdate}
                isSaving={this.state._isSaving}
                error={this.state.error}
                fieldId={_.uniqueId('form-field-')}
            />
        );
    },

    render: function() {
        return (
            <div>
                {this.renderConditon()}
                {this.renderFieldComponent()}
            </div>
        );
    }

});

module.exports = FormField;