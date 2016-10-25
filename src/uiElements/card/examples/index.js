var React = require('react');
var Section = require('section');
var Card = require('../components/card');
var Button = require('../../buttons/components/button');

var CardExamples = React.createClass({

	onClick: function() {
		console.log("this component has been clicked");
	},

	getComponents: function() {
		return [
			<Card>
				<Button 
					type="primary"
					text="Button for card component"
					onClick={this.onClick}/>
				<div>
					Card component
				</div>
			</Card>
		];
	},

	render: function() {
		return (
			<div>
				<Section
					title="Card"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = CardExamples;