var React = require('react');
var Section = require('section');
var DetailTileItem = require('../components/detailTileItem');

var DetailTileItemExample = React.createClass({

	getInitialState: function() {
		return {
			hasBeenBookmarked: false,
			hasBeenLiked: false
		};
	},

	getComponents: function() {
		return [
			<DetailTileItem
				image="http://placehold.it/350x200"
				icon="play"
				title="Detailed Tile Item"
				description="Playllist description Sed justo libero, fringilla non nisl nec, dignissim vestibulum tellus. Sed sed feugiat quam."
				hasBeenBookmarked={this.state.hasBeenBookmarked}
				hasBeenLiked={this.state.hasBeenLiked}
				onBookmarkClicked={this.onBookmarkClicked}
				onLikeClicked={this.onLikeClicked}
				onClick={this.onClick}
				actionButtonText="Continue"
				onActionButtonClicked={this.onActionButtonClicked}
				actionButtonIcon="pencil"
			/>
		]
	},

	//This function is triggered when the play button is pressed.
	onClick: function() {
		console.log("Item has been clicked");
	},

	onBookmarkClicked: function(isBookmarked) {
		console.log("is this item bookmarked", isBookmarked)

		this.setState({
			hasBeenBookmarked: isBookmarked
		});
	},

	onLikeClicked: function(isLiked) {
		console.log("is this item liked", isLiked)

		this.setState({
			hasBeenLiked: isLiked
		});
	},

	onActionButtonClicked: function() {
		console.log("Action button clicked");
	},

	render: function() {
		return (
			<div>
				<Section
					title="Detail Tile Items"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = DetailTileItemExample;