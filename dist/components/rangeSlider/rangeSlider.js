'use strict';

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
    displayName: 'RangeSlider',


    render: function render() {
        var props = this.props;
        return React.createElement(ReactSlider, {
            value: props.value,
            defaultValue: props.defaultValue,
            min: props.min,
            max: props.max,
            step: props.step,
            onChange: props.onChange,
            withBars: true,
            className: 'rangeslider',
            handleClassName: 'rangeslider__handle',
            barClassName: 'rangeslider__bar',
            disabled: !!props.disabled
        });
    }
});

module.exports = RangeSlider;