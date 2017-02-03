'use strict';

var React = require('react');
var Section = require('section');
var Tag = require('../components/tag');

var TagExamples = React.createClass({
	displayName: 'TagExamples',


	getComponents: function getComponents() {
		return [React.createElement(Tag, {
			text: 'Chemistry',
			tagColor: 'red',
			hasCloseButton: true
		}), React.createElement(Tag, {
			text: 'Biology',
			tagColor: 'green',
			hasCloseButton: false
		})];
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Tag',
				components: this.getComponents(),
				shouldDisplayAsBlock: false
			})
		);
	}

});

module.exports = TagExamples;