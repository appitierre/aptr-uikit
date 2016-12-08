var React = require('react');

var GalleryThumbnails = React.createClass({

	onClick: function() {
		
		this.props.onChange(this.props.item);
	},

	render: function() {
		
		return (
			<div className="gallery-thumbnail-item">
				<button onClick={this.onClick}>
					<img src={this.props.item._graphic.src} />
				</button>
			</div>
		);
	}

});

module.exports = GalleryThumbnails;