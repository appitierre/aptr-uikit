'use strict';

var React = require('react');

var NarrativeGalleryItem = React.createClass({
	displayName: 'NarrativeGalleryItem',


	render: function render() {
		return React.createElement(
			'div',
			{ className: 'narrative-slider-item', style: { width: this.props.width + 'px' } },
			React.createElement(
				'div',
				{ className: 'narrative-slider-graphic' },
				React.createElement('img', { src: this.props.item._graphic.src })
			)
		);
	}

});

module.exports = NarrativeGalleryItem;