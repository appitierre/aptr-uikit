var React = require('react');
var GalleryThumbnails = require('./galleryThumbnails');
var GalleryItems = require('./galleryItems');

var Gallery = React.createClass({

	getThumbnails: function() {
		
		return _.map(this.props.items, (item, index) => {
			return (
				<GalleryThumbnails
					key={index}
					item={item}
					onChange={this.props.onChange}
				/>
			);
		});
	},

	getItems: function() {

		return _.map(this.props.items, (item, index) => {
			if (item.isSelected) {
				return (
					<GalleryItems
						key={index}
						item={item}
					/>
				);
			}
		});
	},

	render: function() {

		return (
			<div className="gallery">
				<div className="gallery-thumbnails">
					{this.getThumbnails()}
				</div>
				<div className="gallery-items">
					{this.getItems()}
				</div>
			</div>
		);
	}

});

module.exports = Gallery;