var React = require('react');
var Section = require('section');
var ButtonGroup = require('../components/buttonGroup');

var ButtonGroupExamples = React.createClass({

	getComponents: function() {
		return [
			<ButtonGroup
				buttonType="primary"
				value="menu"
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
				value="menu"
				onChange={this.onChange}
				isSmall={true}
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
			/>
		]
	},

	onChange: function(value) {
		console.log("this button group has changed it's value to ", value)
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