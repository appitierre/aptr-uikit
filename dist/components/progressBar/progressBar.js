'use strict';

var React = require('react');

/* 
PROPS
width: number
backgroundColor: string
*/

var ProgressBar = React.createClass({
	displayName: 'ProgressBar',


	componentWillMount: function componentWillMount() {
		if (!this.props.width) {
			console.warn("You're currently width property");
		}
	},

	renderClassName: function renderClassName() {
		if (this.props.className) {
			return 'progress-bar' + this.props.className;
		} else {
			return 'progress-bar';
		}
	},

	getBackgroundcolor: function getBackgroundcolor() {
		if (this.props.backgroundColor) {
			return this.props.backgroundColor;
		}
	},

	getStyle: function getStyle() {
		return {
			width: this.props.progress,
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