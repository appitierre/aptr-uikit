'use strict';

var React = require('react');
var Button = require('../../buttons/components/button');
var FlatButton = require('../../buttons/components/flatButton');

var TileItem = React.createClass({
	displayName: 'TileItem',


	renderTitle: function renderTitle() {

		return React.createElement(
			'div',
			{ className: 'tile-item-actions-title', onClick: this.props.onClick },
			this.props.title
		);
	},

	renderImage: function renderImage() {

		return React.createElement(
			'div',
			{ className: 'tile-item-image' },
			React.createElement('img', { src: this.props.image }),
			React.createElement(Button, {
				icon: this.props.icon,
				className: 'tile-item-image-button',
				onClick: this.props.onClick })
		);
	},

	renderLike: function renderLike() {

		return React.createElement(
			'div',
			{ className: 'tile-item-actions-like' },
			React.createElement(FlatButton, {
				text: 'Love',
				icon: 'heart',
				onClick: this.onLikeClicked
			})
		);
	},

	renderBookmark: function renderBookmark() {

		return React.createElement(
			'div',
			{ className: 'tile-item-actions-bookmark' },
			React.createElement(FlatButton, {
				icon: 'bookmark2',
				onClick: this.onBookmarkClicked
			})
		);
	},

	onBookmarkClicked: function onBookmarkClicked() {

		this.props.onBookmarkClicked(!this.props.hasBeenBookmarked);
	},

	onLikeClicked: function onLikeClicked() {

		this.props.onLikeClicked(!this.props.hasBeenLiked);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'tile-item' },
			this.renderImage(),
			React.createElement(
				'div',
				{ className: 'tile-item-actions' },
				this.renderTitle(),
				this.renderLike(),
				this.renderBookmark()
			)
		);
	}

});

module.exports = TileItem;