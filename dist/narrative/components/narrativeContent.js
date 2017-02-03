"use strict";

var React = require('react');

var NarrativeContent = React.createClass({
	displayName: "NarrativeContent",


	render: function render() {
		return React.createElement(
			"div",
			{ className: "narrative-content" },
			React.createElement(
				"div",
				{ className: "narrative-content-inner" },
				React.createElement(
					"div",
					{ className: "narrative-content-item" },
					React.createElement(
						"div",
						{ className: "narrative-content-item-title" },
						React.createElement("div", { className: "narrative-content-item-title-inner", dangerouslySetInnerHTML: { __html: this.props.item.title } })
					),
					React.createElement(
						"div",
						{ className: "narrative-content-item-body" },
						React.createElement("div", { className: "narrative-content-item-body-inner", dangerouslySetInnerHTML: { __html: this.props.item.body } })
					)
				)
			)
		);
	}

});

module.exports = NarrativeContent;