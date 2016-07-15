var React = require('react');
var Button = require('../buttons/button');

var CssValue = React.createClass({

    onInputKeyDown: function(event) {
        var keyCode = event.keyCode;

        if (keyCode === 38) {
            this.props.onIncrease(event);
        } else if (keyCode === 40) {
            this.props.onDecrease(event);
        } 
        
    },

    render: function() {
    console.log(Button)
        return (
            <div>
                <input value={this.props.value} onChange={this.props.onChange} onKeyDown={this.onInputKeyDown}/>
                <div>
                    {this.props.unit}
                </div>
                <Button
                    onClick={this.props.onIncrease}
                    icon="chevron-up"
                    type="primary"   
                />
                <Button
                    onClick={this.props.onDecrease}
                    icon="chevron-down"
                />
            </div>
        );
    }

});

module.exports = CssValue;