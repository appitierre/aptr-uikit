var React = require('react');
var registerType = require('../helpers').registerType;
var SketchPicker = require('react-color').SketchPicker;
var Button = require('../../buttons/components/button');
var FlatButton = require('../../buttons/components/flatButton');

var FormFieldColorPicker = React.createClass({

    getInitialState: function() {
        return {
            value: this.props.value,
            isOpen: false
        }
    },

    getPickerStyle: function() {
        if (!this.state.value) {
            return {
                background: "repeating-linear-gradient(45deg, #F2F6F7, #F2F6F7 8px, #FAFDFF 8px, #FAFDFF 16px)"
            }
        }
        return {
            backgroundColor: this.state.value
        }
    },

    onChange: function(color) {
        var rgb = color.rgb;
        var value = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')';
        this.setState({value: value});
    },

    onSaveClicked: function(event) {
        event.preventDefault();
        this.setState({
            isOpen: false
        });
        this.props.updateField(this.state.value);
    },

    onPickerClicked: function(event) {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    },

    onCloseClicked: function(event) {
        event.preventDefault();
        this.setState({
            isOpen: false
        })
    },

    renderColorPopup: function() {
        if (this.state.isOpen) {
            return (
                <div className="form-color-picker-popup">
                    <SketchPicker
                        ref="picker"
                        onChange={this.onChange} 
                        color={this.state.value} 
                        type="chrome"/>                   
                    <div className="form-color-picker-popup-buttons">
                        <Button text="Save" type="primary" onClick={this.onSaveClicked}/>
                        <Button text="Close" type="primary" onClick={this.onCloseClicked}/>
                    </div>  
                </div>
            );
        } else {
            return null;
        }
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

                <div className="form-field-color-picker">
                    <button 
                        className="form-field-color-picker-button"
                        onClick={this.onPickerClicked}>
                        <div className="form-field-color-picker-button-color" style={this.getPickerStyle()}>
                        </div>
                        <i className="icon icon-eye-dropper">
                        </i>
                    </button>
                    {this.renderColorPopup()}                                        
                </div> 

                <div className="form-field-error">
                    {this.props.error}
                </div>

            </div>

        );

    }

});

registerType('ColorPicker', FormFieldColorPicker);

module.exports = FormFieldColorPicker;