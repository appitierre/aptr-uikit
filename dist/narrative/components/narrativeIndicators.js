"use strict";

var React = require('react');

var NarrativeIndicators = React.createClass({
	displayName: "NarrativeIndicators",


	renderIndicators: function renderIndicators() {
		var stage = this.props.stage;

		return _.times(this.props.length, function (index) {
			var className = "narrative-slider-indicator-item";

			if (stage === index) {
				className = "narrative-slider-indicator-item selected";
			}

			return React.createElement("div", { className: className, key: index });
		});
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: "narrative-slider-indicators" },
			this.renderIndicators()
		);
	}

});

module.exports = NarrativeIndicators;