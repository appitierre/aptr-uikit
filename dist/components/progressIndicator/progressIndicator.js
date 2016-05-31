'use strict';

var React = require('react');
var classNames = require('classnames');

var ProgressIndicator = React.createClass({
	displayName: 'ProgressIndicator',


	renderClassName: function renderClassName() {
		return classNames('progress-indicator', this.props.className);
	},

	getBackgroundcolor: function getBackgroundcolor() {
		if (this.props.backgroundColor) {
			return this.props.backgroundColor;
		}
	},

	getProgress: function getProgress() {},

	getStyle: function getStyle() {
		return {
			width: this.getProgress(),
			backgroundColor: this.getBackgroundcolor()
		};
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: this.renderClassName() },
			React.createElement('div', { className: 'progress-indicator-inner', style: this.getStyle() })
		);
	}

});

module.exports = ProgressIndicator;