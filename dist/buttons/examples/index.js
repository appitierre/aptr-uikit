'use strict';

var React = require('react');
var Section = require('section');
var Button = require('../components/button');
var FlatButton = require('../components/flatButton');

var ButtonExamples = React.createClass({
	displayName: 'ButtonExamples',


	getComponents: function getComponents() {
		return [React.createElement(Button, {
			text: 'Primary Button',
			type: 'primary',
			icon: 'key',
			key: 0
		}), React.createElement(Button, {
			text: 'Secondary Button',
			type: 'secondary',
			onClick: this.onClick,
			icon: 'star',
			key: 1
		}), React.createElement(Button, {
			text: 'Alert Button',
			type: 'alert',
			onClick: this.onClick,
			icon: 'trash',
			key: 2
		}), React.createElement(Button, {
			text: 'Disabled Button',
			disabled: true,
			onClick: this.onClick,
			icon: 'trash',
			key: 3
		}), React.createElement(Button, {
			text: 'Large Button',
			type: 'primary large',
			onClick: this.onClick,
			icon: 'trash',
			key: 4
		}), React.createElement(Button, {
			onClick: this.onClick,
			icon: 'arrow-left',
			key: 5
		}), React.createElement(
			'div',
			{ style: { width: "460px" } },
			React.createElement(Button, {
				text: 'Full width button',
				onClick: this.onClick,
				icon: 'star',
				type: 'primary full-width',
				key: 6
			})
		), React.createElement(Button, {
			type: 'secondary',
			text: 'Small Secondary',
			onClick: this.onClick,
			icon: 'register',
			key: 5,
			isSmall: true
		}), React.createElement(Button, {
			type: 'alert',
			text: 'Small Alert',
			onClick: this.onClick,
			icon: 'trash',
			key: 5,
			isSmall: true
		}), React.createElement(Button, {
			type: 'primary',
			text: 'Small primary',
			onClick: this.onClick,
			icon: 'key',
			key: 5,
			isSmall: true
		})];
	},

	getFlatButtonComponents: function getFlatButtonComponents() {
		return [React.createElement(FlatButton, {
			icon: 'pencil4',
			type: 'secondary',
			onClick: this.onClick
		}), React.createElement(FlatButton, {
			icon: 'register',
			type: 'primary',
			onClick: this.onClick
		}), React.createElement(FlatButton, {
			icon: 'trash',
			type: 'alert',
			onClick: this.onClick
		}), React.createElement(FlatButton, {
			text: 'Secondary flat',
			icon: 'star',
			type: 'secondary',
			onClick: this.onClick
		}), React.createElement(FlatButton, {
			text: 'Primary flat',
			icon: 'star',
			type: 'primary',
			onClick: this.onClick
		}), React.createElement(FlatButton, {
			text: 'Plain flat',
			icon: 'star',
			onClick: this.onClick
		})];
	},

	onClick: function onClick() {
		console.log('A Button has been clicked');
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Buttons',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			}),
			React.createElement(Section, {
				title: 'Flat Buttons',
				components: this.getFlatButtonComponents()
			})
		);
	}

});

module.exports = ButtonExamples;