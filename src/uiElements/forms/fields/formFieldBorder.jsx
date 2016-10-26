var React = require('react');
var registerType = require('../helpers').registerType;
var SketchPicker = require('react-color').SketchPicker;
import {CssValue, Button, FlatButton} from 'uiElements';
var FormFieldSelectOption = require('./formFieldSelectOption.jsx');

var options = [{
    "value": "none",
    "text": "none"
}, {
    "value": "hidden",
    "text": "hidden"
}, {
    "value": "dotted",
    "text": "dotted"
}, {
    "value": "dashed",
    "text": "dashed"
}, {
    "value": "solid",
    "text": "solid"
}, {
    "value": "double",
    "text": "double"
}, {
    "value": "groove",
    "text": "groove"
}, {
    "value": "ridge",
    "text": "ridge"
}, {
    "value": "inset",
    "text": "inset"
}, {
    "value": "outset",
    "text": "outset"
}, {
    "value": "initial",
    "text": "initial"
}, {
    "value": "inherit",
    "text": "inherit"
}];

var FormFieldBorder = React.createClass({

    getInitialState: function() {
        var state = this.convertValueToObject();
        state.isOpen = false;
        return state;
    },

    convertValueToObject: function() {

        var state = {
            'width': '1px',
            'style': 'none',
            'color': '#000'
        }

        if (this.props.value) {
            var attributes = this.props.value.replace(/px/g, '').split(' ');

            state.width = parseInt(attributes[0]);
            state.style = attributes[1];
            state.color = attributes[2];

        }

        return state;

    },

    convertObjectToValue: function() {
        var cssValue = this.state.width + 'px ' + this.state.style + ' ' + this.state.color;

        return cssValue;
    },

    getPickerStyle: function() {
        if (!this.state.color) {
            return {
                background: "repeating-linear-gradient(45deg, #F2F6F7, #F2F6F7 8px, #FAFDFF 8px, #FAFDFF 16px)"
            }
        }
        return {
            backgroundColor: this.state.color
        }
    },

    onWidthChange: function(value) {

        this.setState({
            width: value
        }, function() {
            this.updateField();
        });


    },

    onWidthIncrease: function(value) {

        this.setState({
            width: (this.state.width + value)
        }, function() {
            this.updateField();
        });
    },

    onWidthDecrease: function(value) {
        this.setState({
            width: (this.state.width - value)
        }, function() {
            this.updateField();
        });
    },

    onStyleChange: function(event) {
        var value = event.target.value;
        this.setState({
            style: value
        }, function() {
            this.updateField();
        });
    },

    onColorChange: function(color) {
        var rgb = color.rgb;
        var value = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')';
        this.setState({color: value});
    },

    onSaveColorClicked: function(event) {
        event.preventDefault();
        this.setState({
            isOpen: false
        });
        this.updateField();
    },

    onPickerClicked: function(event) {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    },

    onCloseColorClicked: function(event) {
        event.preventDefault();
        this.setState({
            isOpen: false
        })
    },

    updateField: _.throttle(function() {
        var value = this.convertObjectToValue();
        this.props.updateField(value);
    }, 1200, {leading: false}),

    renderOptions: function() {
        return _.map(options, function(option) {
            return (
                <FormFieldSelectOption
                    key={option.value}
                    option={option}
                />
            );
        }, this);
    },

    renderColorPopup: function() {
        if (this.state.isOpen) {
            return (
                <div className="form-color-picker-popup">
                    <SketchPicker
                        ref="picker"
                        onChange={this.onColorChange} 
                        color={this.state.color} 
                        type="chrome"/>                   
                    <div className="form-color-picker-popup-buttons">
                        <Button text="Save" type="primary" onClick={this.onSaveColorClicked}/>
                        <Button text="Close" type="primary" onClick={this.onCloseColorClicked}/>
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

                <CssValue
                    unit={"px"}
                    onChange={this.onWidthChange}
                    value={this.state.width}
                    onIncrease={this.onWidthIncrease}
                    onDecrease={this.onWidthDecrease}
                />

                <select value={this.state.style} onChange={this.onStyleChange}>
                    {this.renderOptions()}
                </select>

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

registerType('Border', FormFieldBorder);

module.exports = FormFieldBorder;