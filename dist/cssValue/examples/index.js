'use strict';

var React = require('react');
var Section = require('section');
var CssValue = require('../components/cssValue');

var CssValueExamples = React.createClass({
	displayName: 'CssValueExamples',


	getInitialState: function getInitialState() {
		return {
			unit: "px",
			width: 100
		};
	},

	getComponents: function getComponents() {
		return [React.createElement(CssValue, {
			unit: this.state.unit,
			value: this.state.width,
			onChange: this.onWidthChanged,
			onIncrease: this.onWidthIncrease,
			onDecrease: this.onWidthDecrease
		})];
	},

	onWidthChanged: function onWidthChanged(value) {
		this.setState({
			width: value
		});
	},

	onWidthIncrease: function onWidthIncrease(increaseBy) {
		this.setState({
			width: this.state.width + 1 * increaseBy
		});
	},

	onWidthDecrease: function onWidthDecrease(decreaseBy) {
		this.setState({
			width: this.state.width - 1 * decreaseBy
		});
	},

	render: function render() {
		console.log("value is now", this.state.width);
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Css Value',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = CssValueExamples;