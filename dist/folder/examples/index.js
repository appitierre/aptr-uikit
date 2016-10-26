'use strict';

var React = require('react');
var Section = require('section');
var Folder = require('../components/folder');

var FolderExamples = React.createClass({
	displayName: 'FolderExamples',


	getComponents: function getComponents() {
		return [React.createElement(Folder, {
			folder: {
				text: "Maths",
				_color: "red",
				className: "maths-folder"
			},
			icon: 'tag',
			onClick: this.onClick
		}), React.createElement(Folder, {
			folder: {
				text: "English",
				_color: "blue",
				className: "english-folder"
			},
			icon: 'tag',
			onClick: this.onClick
		})];
	},

	onClick: function onClick(folder) {
		console.log("this folder is", folder.text);
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Folders',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = FolderExamples;