var React = require('react');
var Section = require('section');
var ActionBar = require('../components/actionBar');
var Button = require('../../buttons/components/button');

var ActionBarExamples = React.createClass({

	getComponents: function() {
		return [
			<ActionBar>
				<Button
					text="Action Bar button"
					type="primary"
					icon="action"/>
			</ActionBar>	
		]
	},

	render: function() {
		return (
			<div>
				<Section
					title="Action Bar"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = ActionBarExamples;