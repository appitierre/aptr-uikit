var React = require('react');
var Section = require('section');
var DropDown = require('../components/dropDown');
var DropDownItems = require('./dropDownItems_example');

var DropDownExamples = React.createClass({

	getComponents: function() {
		return [
			<DropDown
				icon="menu"
				text="Click here to open dropdown" 
				component={
					<DropDownItems/>
				}
			/>
		];
	},

	render: function() {
		return (
			<div>
				<Section
					title="DropDown"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = DropDownExamples;