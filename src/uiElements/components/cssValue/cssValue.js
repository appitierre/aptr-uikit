var React = require('react');
var Button = require('../buttons/button');

var CssValue = React.createClass({

    getInitialState: function() {
        return {
            isShiftKeyDown: false
        }
    },

    propTypes: {
        onIncrease: React.PropTypes.func.isRequired,
        onDecrease: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        unit: React.PropTypes.string.isRequired,
        value: React.PropTypes.number.isRequired
    },

    onInputKeyDown: function(event) {
        var keyCode = event.keyCode;
        
        if (keyCode === 16) {
            this.setState({
                isShiftKeyDown: true
            });
        }

        if (this.state.isShiftKeyDown && keyCode === 38) {
            
            this.props.onIncrease(10);

        } else if (this.state.isShiftKeyDown && keyCode === 40) {
            
            this.props.onDecrease(10);

        } else if (keyCode === 38) {
            
            this.props.onIncrease(1);

        } else if (keyCode === 40) {
            
            this.props.onDecrease(1);

        }

    },

    onInputKeyUp: function(event) {
        var keyCode = event.keyCode;

        if (keyCode === 16) {
            this.setState({
                isShiftKeyDown: false
            });
        }

    },

    onChange: function(event) {
        this.props.onChange(event.target.value);
    },

    onIncrease: function(event) {
        event.preventDefault();
        this.props.onIncrease(1);
    },

    onDecrease: function(event) {
        event.preventDefault();
        this.props.onDecrease(1);
    },

    render: function() {
        return (
            <div className="css-value clearfix">
                <input 
                    className="css-value-input" 
                    value={this.props.value} 
                    onChange={this.onChange} 
                    onKeyDown={this.onInputKeyDown}
                    onKeyUp={this.onInputKeyUp}/>
                <div className="css-value-unit">
                    {this.props.unit}
                </div>
                <div className="css-value-buttons">
                    <Button
                        onClick={this.onIncrease}
                        icon="chevron-up"
                        type="primary"   
                    />
                    <Button
                        onClick={this.onDecrease}
                        icon="chevron-down"
                        type="primary"
                    />
                </div>
            </div>
        );
    }

});

module.exports = CssValue;