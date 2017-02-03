'use strict';

var React = require('react');
var Section = require('section');
var Message = require('../components/message');

var MessageExamples = React.createClass({
	displayName: 'MessageExamples',


	getComponents: function getComponents() {
		return [React.createElement(Message, {
			title: 'User mcUser',
			body: 'User recieved a message from the message/notification ui element',
			onClick: this.onClick,
			avatar: 'http://placehold.it/400x400',
			onCloseButtonClicked: this.onCloseButtonClicked,
			icon: 'alarm',
			iconColor: 'red',
			author: 'User mcUser'
		})];
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Message',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = MessageExamples;