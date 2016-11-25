var React = require('react');
var Section = require('section');
var CheckboxRadioList = require('../components/checkboxRadioList');

var CheckboxRadioListExamples = React.createClass({

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
				},
				{
					_isSelected: false,
					text: "Item 3",
					id: 3
				},
				{
					_isSelected: false,
					text: "Item 4",
					id: 4
				}
			]
		}
	},

	getComponents: function() {
		return [
			<CheckboxRadioList 
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
					title="Checkbox / Radio"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = CheckboxRadioListExamples;