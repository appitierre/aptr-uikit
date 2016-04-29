'use strict';

var React = require('react');

/* 

This is an example of how what a collection content item should look like.
Here you should always have a title and body. 

*/

var CollectionItemContent = React.createClass({
	displayName: 'CollectionItemContent',


	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: 'collection-item-content-title' },
				React.createElement(
					'h2',
					null,
					this.props.title
				)
			),
			React.createElement(
				'div',
				{ className: 'collection-item-content-body' },
				this.props.body
			)
		);
	}

});

module.exports = CollectionItemContent;