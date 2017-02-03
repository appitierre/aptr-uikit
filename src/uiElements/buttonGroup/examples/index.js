var React = require('react');
var Section = require('section');
var ButtonGroup = require('../components/buttonGroup');

var ButtonGroupExamples = React.createClass({

	getInitialState: function() {
		return {
			value: "menu",
			toggleValue: "trash"
		}
	},

	getComponents: function() {
		return [
			<ButtonGroup
				buttonType="primary"
				value={this.state.value}
				onChange={this.onChange}
				buttons={
					[{
						"_icon": "menu", 
						"_value": "menu"}, 
					{
						"_icon": "trash", 
						"_value": "trash"
					}, 
         			{
         				"_icon": "check", 
         				"_value": "check"
         			} 
    			]}
			/>,
			<ButtonGroup
				buttonType="secondary"
				value={this.state.toggleValue}
				onChange={this.onToggleChange}
				isSmall={true}
				shouldUseToggle={true}
				buttons={
					[{
						"_icon": "menu", 
						"_value": "menu"}, 
					{
						"_icon": "trash", 
						"_value": "trash"
					}
    			]}
			/>
		]
	},

	onToggleChange: function(nextItem) {
		console.log("this button group toggle has changed it's value to", nextItem._value);

		this.setState({
			toggleValue: nextItem._value
		})	
	},

	onChange: function(value) {
		console.log("this button group component has changed it's value to", value);

		this.setState({
			value: value
		})
	},

	render: function() {
		return (
			<Section
				title="Button Group"
				components={this.getComponents()}
				shouldDisplayAsBlock={false}
			/>
		);
	}

});

module.exports = ButtonGroupExamples;