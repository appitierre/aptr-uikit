'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var Button = require('../../buttons/components/button');
var NarrativeGallery = require('./narrativeGallery');
var NarrativeIndicators = require('./narrativeIndicators');
var NarrativeContent = require('./narrativeContent');

var Narrative = React.createClass({
	displayName: 'Narrative',


	getInitialState: function getInitialState() {
		return {
			narrativeWidth: 0,
			sliderWidth: 0
		};
	},

	componentDidMount: function componentDidMount() {
		var narrativeWidth = this.refs['narrative'].clientWidth;
		var sliderWidth = narrativeWidth * this.props.items.length;

		this.setState({
			narrativeWidth: narrativeWidth,
			sliderWidth: sliderWidth
		});
	},

	renderNarrativeGallery: function renderNarrativeGallery() {

		return React.createElement(NarrativeGallery, _extends({
			narrativeWidth: this.state.narrativeWidth,
			sliderWidth: this.state.sliderWidth
		}, this.props, {
			onRightControlClicked: this.onRightControlClicked,
			onLeftControlClicked: this.onLeftControlClicked
		}));
	},

	renderNarrativeIndicators: function renderNarrativeIndicators() {

		return React.createElement(NarrativeIndicators, {
			stage: this.props.stage,
			length: this.props.items.length
		});
	},

	renderNarrativeContent: function renderNarrativeContent() {
		var _this = this;

		return _.map(this.props.items, function (item, index) {
			if (index === _this.props.stage) {
				return React.createElement(NarrativeContent, {
					item: item,
					key: index
				});
			}
		});
	},

	onRightControlClicked: function onRightControlClicked() {
		this.props.onChange(this.props.stage + 1);
	},

	onLeftControlClicked: function onLeftControlClicked() {
		this.props.onChange(this.props.stage - 1);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'narrative', ref: 'narrative' },
			this.renderNarrativeGallery(),
			this.renderNarrativeIndicators(),
			this.renderNarrativeContent()
		);
	}

});

module.exports = Narrative;