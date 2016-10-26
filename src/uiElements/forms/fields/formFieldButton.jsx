import React from 'react';
import {Button} from 'uiElements';
import {registerType} from '../helpers';

var FormFieldButton = React.createClass({

    onButtonClicked: function(event) {
        event.preventDefault();
        if (this.props.form && this.props.form.actions[this.props.buttonAction]) {
            this.props.form.actions[this.props.buttonAction]();
        } else {
            console.warn("Seems as though a button action is missing or doesn't match the schema")
        }
    },

    render: function() {
        return (
            <div className="form-field">

                <label className="form-field-label">
                    {this.props.label}
                </label>

                <div className="form-field-help">
                    {this.props.help}
                </div>

                <Button 
                    onClick={this.onButtonClicked} 
                    icon={this.props.buttonIcon} 
                    type={this.props.buttonType} 
                    text={this.props.buttonText}/>

                <div className="form-field-error">
                    {this.props.error}
                </div>

            </div>
        );
    }

});

registerType('Button', FormFieldButton);

export default FormFieldButton;