'use strict';

var React = require('react');
var Button = require('../../buttons/components/button');
var FlatButton = require('../../buttons/components/flatButton');

var DetailTileItem = React.createClass({
	displayName: 'DetailTileItem',


	renderContent: function renderContent() {

		return React.createElement(
			'div',
			{ className: 'detail-tile-item-details' },
			React.createElement(
				'div',
				{ className: 'detail-tile-item-content-title' },
				this.props.title
			),
			React.createElement(
				'div',
				{ className: 'detail-tile-item-content-description' },
				this.props.description
			),
			React.createElement(
				'div',
				{ className: 'detail-tile-item-actions' },
				this.renderLike(),
				this.renderBookmark()
			),
			this.renderActionButton()
		);
	},

	renderImage: function renderImage() {

		return React.createElement(
			'div',
			{ className: 'detail-tile-item-image' },
			React.createElement('img', { src: this.props.image }),
			React.createElement(Button, {
				icon: this.props.icon,
				className: 'detail-tile-item-image-button',
				onClick: this.props.onClick })
		);
	},

	renderLike: function renderLike() {

		return React.createElement(
			'div',
			{ className: 'detail-tile-item-actions-like' },
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
			{ className: 'detail-tile-item-actions-bookmark' },
			React.createElement(FlatButton, {
				icon: 'bookmark2',
				onClick: this.onBookmarkClicked
			})
		);
	},

	renderActionButton: function renderActionButton() {

		if (this.props.actionButtonIcon) {
			var icon = this.props.actionButtonIcon;
		};

		return React.createElement(
			'div',
			{ className: 'detail-tile-item-continue-button' },
			React.createElement(Button, {
				icon: icon,
				type: 'secondary',
				text: this.props.actionButtonText,
				onClick: this.props.onActionButtonClicked
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
			{ className: 'detail-tile-item' },
			React.createElement(
				'div',
				{ className: 'detail-tile-item-inner clearfix' },
				this.renderImage(),
				this.renderContent()
			)
		);
	}

});

module.exports = DetailTileItem;