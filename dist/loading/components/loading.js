'use strict';

var React = require('react');
var classNames = require('classnames');

var Loading = React.createClass({
	displayName: 'Loading',

	getAccessibilityTags: function getAccessibilityTags() {
		return {"role": "alert"}
	},

	getClassName: function getClassName() {
		return classNames('loading', this.props.className);
	},

	getComponent: function getComponent() {
		if (this.props.hasDataLoaded) {
			return this.props.children;
		} else {
			return React.createElement(
				'div',
				_.merge({className: this.getClassName()}, this.getAccessibilityTags()),
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