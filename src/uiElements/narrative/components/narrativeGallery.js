var React = require('react');
var NarrativeGalleryItem = require('./narrativeGalleryItem');
var Button = require('../../buttons/components/button');

var NarrativeGallery = React.createClass({

	renderItems: function() {
		
		return _.map(this.props.items, (item, index) => {
			var length = this.props.items.length;
			
			return (
				<NarrativeGalleryItem
					key={index} 
					item={item}
					stage={this.props.stage}
					width={this.props.narrativeWidth}
				/>
			)
		});
	},

	renderLeftControl: function() {

		if (this.props.stage > 0) {
			return (
				<Button 
					type="secondary"
					icon="arrow-left"
					onClick={this.onLeftControlClicked}
					className="narrative-slider-controls-left"
				/> 
			);
		} 

	},

	renderRightControl: function() {

		if (this.props.stage !== (this.props.items.length - 1)) {
			return (
				<Button 
					type="secondary"
					icon="arrow-right"
					onClick={this.onRightControlClicked}
					className="narrative-slider-controls-right"
				/>
			)
		}
	},

	onRightControlClicked: function() {
		this.props.onChange(this.props.stage + 1);
	},

	onLeftControlClicked: function() {
		this.props.onChange(this.props.stage - 1);
	},

	render: function() {
		var minusInt = this.props.narrativeWidth * -1;

		return (
			<div className="narrative-gallery">
				{this.renderLeftControl()}
				<div className="narrative-slider" style={{width: this.props.sliderWidth + 'px', marginLeft: this.props.stage * minusInt}}>
					{this.renderItems()}
				</div>
				{this.renderRightControl()}
			</div>
		);
	}

});

module.exports = NarrativeGallery;