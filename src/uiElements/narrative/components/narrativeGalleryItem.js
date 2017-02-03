var React = require('react');

var NarrativeGalleryItem = React.createClass({

	render: function() {
		return (
			<div className="narrative-slider-item" style={{width: this.props.width + 'px'}}>
				<div className="narrative-slider-graphic">
					<img src={this.props.item._graphic.src}/>
				</div>	
			</div>
			
		);
	}

});

module.exports = NarrativeGalleryItem;