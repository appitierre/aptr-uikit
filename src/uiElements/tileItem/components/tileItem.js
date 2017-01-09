var React = require('react');
var Button = require('../../buttons/components/button');
var FlatButton = require('../../buttons/components/flatButton');

var TileItem = React.createClass({

	renderTitle: function() {

		return (
			<div className="tile-item-actions-title" onClick={this.props.onClick}>
				{this.props.title}
			</div>
		);
	},

	renderImage: function() {

		return (
			<div className="tile-item-image">
				<img src={this.props.image}/>
				<Button 
					icon={this.props.icon}
					className="tile-item-image-button"
					onClick={this.props.onClick}/>
			</div>
		);
	},

	renderLike: function() {

		return (
			<div className="tile-item-actions-like">
				<FlatButton 
					text="Love"
					icon="heart"
					onClick={this.onLikeClicked}
				/>
			</div>			
		)
	},

	renderBookmark: function() {
		
		return (
			<div className="tile-item-actions-bookmark">
				<FlatButton 
					icon="bookmark2"
					onClick={this.onBookmarkClicked}
				/>
			</div>
		)
	},

	onBookmarkClicked: function() {

		this.props.onBookmarkClicked(!this.props.hasBeenBookmarked);
	},

	onLikeClicked: function() {

		this.props.onLikeClicked(!this.props.hasBeenLiked);
	},

	render: function() {
		return (
			<div className="tile-item">
				{this.renderImage()}
				<div className="tile-item-actions">
					{this.renderTitle()}
					{this.renderLike()}
					{this.renderBookmark()}
				</div>
			</div>
		);
	}

});

module.exports = TileItem;