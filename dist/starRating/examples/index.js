'use strict';

var React = require('react');
var Section = require('section');
var StarRating = require('../components/starRating');

var StarRatingExamples = React.createClass({
	displayName: 'StarRatingExamples',


	getInitialState: function getInitialState() {
		return {
			value: 0,
			isDisabled: false
		};
	},

	getComponents: function getComponents() {
		return [React.createElement(StarRating, {
			total: 5,
			value: this.state.value,
			onChange: this.onStarRatingChanged,
			className: 'starss',
			isDisabled: this.state.isDisabled
		})];
	},

	onStarRatingChanged: function onStarRatingChanged(value) {
		this.setState({
			value: value
		});

		console.log("the star value is:", value);
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Star Rating',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = StarRatingExamples;