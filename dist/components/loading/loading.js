'use strict';

var React = require('react');

var Loading = React.createClass({
	displayName: 'Loading',


	render: function render() {
		console.log('rendered');
		return React.createElement(
			'div',
			{ className: 'loading' },
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

});

module.exports = Loading;