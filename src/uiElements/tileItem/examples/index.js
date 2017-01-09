var React = require('react');
var Section = require('section');
var TileItem = require('../components/tileItem');


var TileItemExamples = React.createClass({

	getInitialState: function() {
		return {
			hasBeenBookmarked: false,
			hasBeenLiked: false
		};
	},

	getComponents: function() {
		
		return [
			<TileItem 
				image="http://placehold.it/250x150"
				icon="play"
				title="Tile item one Tile item one Tile item ones Tile item one"
				hasBeenBookmarked={this.state.hasBeenBookmarked}
				hasBeenLiked={this.state.hasBeenLiked}
				onBookmarkClicked={this.onBookmarkedClicked}
				onLikeClicked={this.onLikedClicked}
				onClick={this.onClick}
			/>
		];
	},

	onClick: function() {

		console.log("Tile Item has been clicked");
	},

	onBookmarkedClicked: function(isBookmarked) {
		console.log("is this item bookmarked", isBookmarked)

		this.setState({
			hasBeenBookmarked: isBookmarked
		});
	},

	onLikedClicked: function(isLiked) {
		console.log("is this item liked", isLiked)

		this.setState({
			hasBeenLiked: isLiked
		});
	},

	render: function() {
	
		return (
			<div>
				<Section
					title="Tile Item"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = TileItemExamples;