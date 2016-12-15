var React = require('react');

var GalleryThumbnails = React.createClass({

	onClick: function() {
		
		this.props.onChange(this.props.item);
	},

	render: function() {
		var className = "gallery-thumbnail-item-inner";

		if (this.props.item.isSelected) {
			className = "gallery-thumbnail-item-inner selected"
		};

		return (
			<div className="gallery-thumbnail-item">
				<button onClick={this.onClick} className="gallery-thumbnail-item-inner">
					<img src={this.props.item._graphic.src} />
				</button>
			</div>
		);
	}

});

module.exports = GalleryThumbnails;