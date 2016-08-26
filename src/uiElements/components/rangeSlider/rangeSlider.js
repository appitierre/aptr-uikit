var React = require('react');
var ReactSlider = require('react-slider');

/*
props:
value: Number, for a controlled RangeSlider component
defaultValue: Number
min: Number
max: Number,
step: Number,
disabled: Boolean
*/

var RangeSlider = React.createClass({
    
    propTypes: {
        value: React.PropTypes.number.isRequired,
        defaultValue: React.PropTypes.number,
        min: React.PropTypes.number.isRequired,
        max: React.PropTypes.number.isRequired,
        step:React.PropTypes.number,
        disabled: React.PropTypes.bool,
        onChange: React.PropTypes.func.isRequired
    },

    render: function () {
        var props = this.props;
        return(
            <ReactSlider
                value={props.value}
                defaultValue={props.defaultValue}
                min={props.min}
                max={props.max}
                step={props.step}
                onChange={props.onChange}
                withBars={true}
                className="rangeslider"
                handleClassName="rangeslider__handle"
                barClassName="rangeslider__bar"
                disabled={!!props.disabled}
            />
        );
    }
});

module.exports = RangeSlider;