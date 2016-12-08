var React = require('react');
var Section = require('section');
var Gallery = require('../components/gallery');

var GalleryExamples = React.createClass({

	getInitialState: function() {

		return {
			_items: [
				{
					isSelected: true,
					_graphic: {
						src: "http://lorempixel.com/output/nature-q-c-1024-670-2.jpg"
					}
				},
				{
					isSelected: false,
					_graphic: {
						src: "http://lorempixel.com/output/nature-q-c-1024-670-4.jpg"
					}
				},
				{
					isSelected: false,
					_graphic: {
						src: "http://lorempixel.com/output/nature-q-c-1024-670-8.jpg"
					}
				}
			]
		}
	},

	getComponents: function() {

		return [
			<Gallery 
				items={this.state._items}
				onChange={this.onChange}
			/>
		]
	},

	onChange: function(item) {
	
		_.each(this.state._items, function(galleyItem) {
 			if (item != galleyItem) {
 				galleyItem.isSelected = false;
 			}
 		});

 		item.isSelected = true;

		this.setState({_items: this.state._items});
	},

	render: function() {

		return (
			<div>
				<Section
					title="Gallery"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = GalleryExamples;