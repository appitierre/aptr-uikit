var React = require('react');
var Section = require('section');
var Carousel = require('../components/carousel');

var CarouselExamples = React.createClass({

	onClick: function() {
		console.log("item clicked");
	},

	onViewMoreClicked: function() {
		console.log("on view more button clicked");
	},

	onActionClicked: function() {
		console.log("on action clicked");
	},

	getComponents: function() {
		return [
			<Carousel 
				items={[
					{
						title: "item 1",
						_id: 1,
						onClick: this.onClick,
						graphic: "http://lorempixel.com/output/city-q-c-640-480-8.jpg",
						actions: [{
							icon: "star",
							text: "action",
							type: "secondary",
							onClick: this.onActionClicked
						}]
					},
					{
						title: "item 2",
						_id: 2,
						onClick: this.onClick,
						graphic: "http://lorempixel.com/output/city-q-c-640-480-2.jpg",
						actions: [{
							icon: "paint-roller",
							text: "action",
							type: "secondary",
							onClick: this.onActionClicked 
						}]
					},
					{
						title: "item 3",
						_id: 3,
						onClick: this.onClick,
						graphic: "http://lorempixel.com/output/city-q-c-640-480-8.jpg",
						actions: [{
							icon: "bucket",
							text: "action",
							type: "secondary",
							onClick: this.onActionClicked
						}]
					}
				]}
				shouldShowViewMoreButton={true}
				viewMoreIcon="arrow-right"
				viewMoreText="View more button"
				onViewMoreClicked={this.onViewMoreClicked}
			/>
		];
	},

	render: function() {
	console.log("carousel examples rendering");
		return (
			<div>
				<Section
					title="Carousel"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = CarouselExamples;