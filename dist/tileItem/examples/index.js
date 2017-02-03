'use strict';

var React = require('react');
var Section = require('section');
var TileItem = require('../components/tileItem');

var TileItemExamples = React.createClass({
	displayName: 'TileItemExamples',


	getInitialState: function getInitialState() {
		return {
			hasBeenBookmarked: false,
			hasBeenLiked: false
		};
	},

	getComponents: function getComponents() {

		return [React.createElement(TileItem, {
			image: 'http://placehold.it/250x150',
			icon: 'play',
			title: 'Tile item one Tile item one Tile item ones Tile item one',
			hasBeenBookmarked: this.state.hasBeenBookmarked,
			hasBeenLiked: this.state.hasBeenLiked,
			onBookmarkClicked: this.onBookmarkedClicked,
			onLikeClicked: this.onLikedClicked,
			onClick: this.onClick
		})];
	},

	onClick: function onClick() {

		console.log("Tile Item has been clicked");
	},

	onBookmarkedClicked: function onBookmarkedClicked(isBookmarked) {
		console.log("is this item bookmarked", isBookmarked);

		this.setState({
			hasBeenBookmarked: isBookmarked
		});
	},

	onLikedClicked: function onLikedClicked(isLiked) {
		console.log("is this item liked", isLiked);

		this.setState({
			hasBeenLiked: isLiked
		});
	},

	render: function render() {

		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Tile Items',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = TileItemExamples;