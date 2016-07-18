var React = require('react');
var Button = require('../buttons/button');

var CssValue = React.createClass({

    onInputKeyDown: function(event) {
        var keyCode = event.keyCode;

        if (keyCode === 16 && keyCode === 38) {
            console.log('both')
        } else if (keyCode === 38) {
            this.props.onIncrease(event);
        } else if (keyCode === 40) {
            this.props.onDecrease(event);
        } 
    },

    render: function() {
        return (
            <div className="css-value clearfix">
                <input className="css-value-input" value={this.props.value} onChange={this.props.onChange} onKeyDown={this.onInputKeyDown}/>
                <div className="css-value-unit">
                    {this.props.unit}
                </div>
                <div className="css-value-buttons">
                    <Button
                        onClick={this.props.onIncrease}
                        icon="chevron-up"
                        type="primary"   
                    />
                    <Button
                        onClick={this.props.onDecrease}
                        icon="chevron-down"
                        type="primary"
                    />
                </div>
            </div>
        );
    }

});

module.exports = CssValue;