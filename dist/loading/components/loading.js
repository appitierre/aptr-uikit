'use strict';

var React = require('react');
var classNames = require('classnames');

var Loading = React.createClass({
	displayName: 'Loading',


	getClassName: function getClassName() {
		return classNames('loading', this.props.className);
	},

	getComponent: function getComponent() {
		if (this.props.hasDataLoaded) {
			return this.props.children;
		} else {
			return React.createElement(
				'div',
				{ className: this.getClassName() },
				React.createElement(
					'div',
					{ className: 'loading-inner' },
					React.createElement(
						'div',
						{ className: 'loading-icon' },
						React.createElement('div', { className: 'loading-icon-spinner' })
					),
					React.createElement(
						'div',
						{ className: 'loading-text' },
						this.props.text
					)
				)
			);
		}
	},

	render: function render() {
		return this.getComponent();
	}

});

module.exports = Loading;