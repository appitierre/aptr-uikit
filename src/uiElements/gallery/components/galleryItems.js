var React = require('react');

var GalleryItems = React.createClass({

	render: function() {
		return (
			<div className="gallery-item">
				<img src={this.props.item._graphic.src}/>
			</div>
		);
	}

});

module.exports = GalleryItems;