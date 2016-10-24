var React = require('react');
var classNames = require('classnames');
var Button = require('../buttons/button');

var CssValue = React.createClass({

    getInitialState: function() {
        return {
            isShiftKeyDown: false
        }
    },

    getClassName: function() {
        if (this.props.isSmall) {
            return classNames('css-value clearfix', this.props.className, 'is-small');
        } else {
            return classNames('css-value clearfix', this.props.className);
        };
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
            <div className={this.getClassName()}>
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
                        isSmall={this.props.isSmall}   
                    />
                    <Button
                        onClick={this.onDecrease}
                        icon="chevron-down"
                        type="primary"
                        isSmall={this.props.isSmall}
                    />
                </div>
            </div>
        );
    }

});

module.exports = CssValue;