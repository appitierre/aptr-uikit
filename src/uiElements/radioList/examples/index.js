var React = require('react');
var Section = require('section');
var RadioList = require('../components/radioList');

var RadioListExamples = React.createClass({

	getInitialState: function() {
		return {
			_items: [
				{
					_isSelected: false,
					text: "Item 1",
					id: 1
				},
				{
					_isSelected: false,
					text: "Item 2",
					id: 2
				}
			]
		}
	},

	getComponents: function() {
		return [
			<RadioList 
				items={this.state._items}
				onChange={this.onChange}
				type="radio"
			/>
		]
	},

	onChange: function(item) {
		_.each(this.state._items, function(radioListItem) {
			if (item != radioListItem) {
				radioListItem._isSelected = false;
			}
		})

		item._isSelected = true;
		this.setState({_items: this.state._items});
	},

	render: function() {
		return (
			<div>
				<Section
					title="Radio List"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = RadioListExamples;