var React = require('react');
var Section = require('section');
var CssValue = require('../components/cssValue');

var CssValueExamples = React.createClass({

	getInitialState: function() {
		return {
			unit: "px",
			width: 100
		}
	},

	getComponents: function() {
		return [
			<CssValue 
				unit={this.state.unit}
				value={this.state.width}
				onChange={this.onWidthChanged}
				onIncrease={this.onWidthIncrease}
				onDecrease={this.onWidthDecrease}
			/>,
			<CssValue 
				unit={this.state.unit}
				value={this.state.width}
				isSmall={true}
				onChange={this.onWidthChanged}
				onIncrease={this.onWidthIncrease}
				onDecrease={this.onWidthDecrease}
			/>
		]
	},

	onWidthChanged: function(value) {
		this.setState({
			width: value
		})
	},

	onWidthIncrease: function(increaseBy) {
		this.setState({
			width: this.state.width + (1 * increaseBy)
		})
	},

	onWidthDecrease: function(decreaseBy) {
		this.setState({
			width: this.state.width - (1 * decreaseBy)
		})
	},

	render: function() {
	console.log("value is now", this.state.width);
		return (
			<div>
				<Section
					title="Css Value"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = CssValueExamples;