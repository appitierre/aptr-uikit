var React = require('react');
var Button = require('../../buttons/components/button');
var FlatButton = require('../../buttons/components/flatButton');

var DetailTileItem = React.createClass({

	renderContent: function() {

		return (
			<div className="detail-tile-item-details">
				<div className="detail-tile-item-content-title">
					{this.props.title}
				</div>
				<div className="detail-tile-item-content-description">
					{this.props.description}
				</div>
				<div className="detail-tile-item-actions">
					{this.renderLike()}
					{this.renderBookmark()}
				</div>
				{this.renderActionButton()}
			</div>
		);
	},

	renderImage: function() {

		return (
			<div className="detail-tile-item-image">
				<img src={this.props.image}/>
				<Button 
					icon={this.props.icon}
					className="detail-tile-item-image-button"
					onClick={this.props.onClick}/>
			</div>
		);
	},

	renderLike: function() {

		return (
			<div className="detail-tile-item-actions-like">
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
			<div className="detail-tile-item-actions-bookmark">
				<FlatButton 
					icon="bookmark2"
					onClick={this.onBookmarkClicked}
				/>
			</div>
		)
	},

	renderActionButton: function() {
		
		if (this.props.actionButtonIcon) {
			var icon = this.props.actionButtonIcon
		};

		return (
			<div className="detail-tile-item-continue-button">	
				<Button
					icon={icon} 
					type="secondary"
					text={this.props.actionButtonText}
					onClick={this.props.onActionButtonClicked}
				/>
			</div>
		); 
	},

	onBookmarkClicked: function() {

		this.props.onBookmarkClicked(!this.props.hasBeenBookmarked);
	},

	onLikeClicked: function() {

		this.props.onLikeClicked(!this.props.hasBeenLiked);
	},

	render: function() {
		return (
			<div className="detail-tile-item">
				<div className="detail-tile-item-inner clearfix"> 
					{this.renderImage()}
					{this.renderContent()}
				</div>
			</div>
		);
	}

});

module.exports = DetailTileItem;