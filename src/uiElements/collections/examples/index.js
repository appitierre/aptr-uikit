var React = require('react');
var Section = require('section');
var CollectionItem = require('../components/collectionItem');
var CollectionItemAction = require('./collectionItemAction_example');
var CollectionItemContent = require('./collectionItemContent_example');

var CollectionItemExamples = React.createClass({

	getComponents: function() {
		return [
			<CollectionItem 
				contentComponent={
					<CollectionItemContent 
						title="Content Title"
						body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
					/>
				}
				actionsComponent={
					<CollectionItemAction/>
				}
			/>
		]
	},

	render: function() {
		return (
			<div>
				<Section
					title="Collection Item"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = CollectionItemExamples;