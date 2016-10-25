'use strict';

var React = require('react');
var classNames = require('classnames');

var Tag = React.createClass({
	displayName: 'Tag',


	getStyle: function getStyle() {
		if (this.props.tagColor) {
			return {
				color: this.props.tagColor
			};
		}
	},

	getCloseButton: function getCloseButton() {
		if (this.props.hasCloseButton === true) {
			return React.createElement(
				'button',
				{ className: 'tag-item-remove' },
				React.createElement('i', { className: 'icon icon-cross' })
			);
		}
	},

	getClassName: function getClassName() {
		return classNames('tag-item', this.props.className);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'tag-item' },
			React.createElement('i', { className: 'icon icon-tag tag-item-icon', style: this.getStyle() }),
			React.createElement(
				'span',
				null,
				this.props.text
			),
			this.getCloseButton()
		);
	}

});

module.exports = Tag;