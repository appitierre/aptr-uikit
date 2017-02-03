'use strict';

var React = require('react');
var Section = require('section');
var DetailTileItem = require('../components/detailTileItem');

var DetailTileItemExample = React.createClass({
	displayName: 'DetailTileItemExample',


	getInitialState: function getInitialState() {
		return {
			hasBeenBookmarked: false,
			hasBeenLiked: false
		};
	},

	getComponents: function getComponents() {
		return [React.createElement(DetailTileItem, {
			image: 'http://placehold.it/350x200',
			icon: 'play',
			title: 'Detailed Tile Item',
			description: 'Playllist description Sed justo libero, fringilla non nisl nec, dignissim vestibulum tellus. Sed sed feugiat quam.',
			hasBeenBookmarked: this.state.hasBeenBookmarked,
			hasBeenLiked: this.state.hasBeenLiked,
			onBookmarkClicked: this.onBookmarkClicked,
			onLikeClicked: this.onLikeClicked,
			onClick: this.onClick,
			actionButtonText: 'Continue',
			onActionButtonClicked: this.onActionButtonClicked,
			actionButtonIcon: 'pencil'
		})];
	},

	//This function is triggered when the play button is pressed.
	onClick: function onClick() {
		console.log("Item has been clicked");
	},

	onBookmarkClicked: function onBookmarkClicked(isBookmarked) {
		console.log("is this item bookmarked", isBookmarked);

		this.setState({
			hasBeenBookmarked: isBookmarked
		});
	},

	onLikeClicked: function onLikeClicked(isLiked) {
		console.log("is this item liked", isLiked);

		this.setState({
			hasBeenLiked: isLiked
		});
	},

	onActionButtonClicked: function onActionButtonClicked() {
		console.log("Action button clicked");
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Detail Tile Items',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = DetailTileItemExample;