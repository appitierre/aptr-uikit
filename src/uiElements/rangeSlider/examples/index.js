var React = require('react');
var Section = require('section');
var RangeSlider = require('../components/rangeSlider');

var RangeSliderExamples = React.createClass({

	getComponents: function() {
		return [
			<RangeSlider 
				onChange={this.onChange}
			    step={1}
			    min={1}
			    max={100}
			    defaultValue={30}
			/>
		]
	},

	onChange: function(value) {
		console.log("range slider value:", value)
	},

	render: function() {
		return (
			<div>
				<Section
					title="Range Slider"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = RangeSliderExamples;