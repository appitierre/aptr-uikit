var React = require('react');
var Section = require('section');
var ListItems = require('../components/listItems');
var ListItem = require('../components/listItem');

var ListItemsExamples = React.createClass({

	getComponents: function() {
		return [
			<ListItems 
				shouldShowAlternativeColors={true}
				items={[
					<ListItem
						itemText="this is the text for the list item"
						itemDetail="the item detail"
						key={0}
						buttons={
							[{
								type: "primary",
								icon: "pencil4",
								onClick: this.onClick
							}]
						}
					/>,
					<ListItem
						key={1}
						onClick={this.onClick}
						component={
							<div>
							 	List Item component
							</div>
						}
					/>
				]}
			/>
		]
	},

	onClick: function() {
		console.log("this has been clicked");
	},

	render: function() {
		return (
			<div>
				<Section
					title="List Items"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = ListItemsExamples;