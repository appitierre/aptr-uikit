'use strict';

var React = require('react');
var classNames = require('classnames');

/* 
PROPS
progress: number
backgroundColor: string
*/

var ProgressBar = React.createClass({
	displayName: 'ProgressBar',


	componentWillMount: function componentWillMount() {
		if (!this.props.progress) {
			console.warn("You're currently missing progress property");
		}
	},

	renderClassName: function renderClassName() {
		return classNames('progress-bar', this.props.className);
	},

	getBackgroundcolor: function getBackgroundcolor() {
		if (this.props.backgroundColor) {
			return this.props.backgroundColor;
		}
	},

	getProgress: function getProgress() {
		if (this.props.progress) {
			return this.props.progress + '%';
		}
	},

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
			React.createElement('div', { className: 'progress-bar-inner', style: this.getStyle() })
		);
	}

});

module.exports = ProgressBar;