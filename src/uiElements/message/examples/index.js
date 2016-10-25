var React = require('react');
var Section = require('section');
var Message = require('../components/message');

var MessageExamples = React.createClass({

	getComponents: function() {
		return [
			<Message 
				title="User mcUser" 
			    body="User recieved a message from the message/notification ui element"
			    onClick={this.onClick}
			    avatar="http://placehold.it/400x100"
			    onCloseButtonClicked={this.onCloseButtonClicked}
			    icon="alarm"
			    iconColor="red"
			    author="User mcUser"
			/>
		]
	}, 

	render: function() {
		return (
			<div>
				<Section
					title="Message"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = MessageExamples;