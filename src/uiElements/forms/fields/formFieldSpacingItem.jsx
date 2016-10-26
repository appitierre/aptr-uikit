var React = require('react');
import {CssValue} from 'uiElements';

var FormFieldSpacingItem = React.createClass({

    getInitialState: function() {
        return {
            value: this.props.value
        }
    },

    onChange: function(value) {

        this.setState({
            value: value || 0
        }, function() {
            this.updateField();
        });


    },

    onIncrease: function(value) {
        this.setState({
            value: (this.state.value + (value || 0))  
        }, function() {
            this.updateField();
        });
    },

    onDecrease: function(value) {
        this.setState({
            value: (this.state.value - (value || 0)) 
        }, function() {
            this.updateField();
        });
    },

    updateField: function() {
        var updateObject = {};
        updateObject[this.props.position] = this.state.value;
        this.props.onChange(updateObject);
    },

    render: function() {
        return (
            <div>
                <div className="form-field-label">
                    {this.props.label}
                </div>
                <CssValue
                    unit={'px'}
                    value={this.state.value}
                    onChange={this.onChange}
                    onIncrease={this.onIncrease}
                    onDecrease={this.onDecrease}
                />
            </div>
        );
    }

});

module.exports = FormFieldSpacingItem;