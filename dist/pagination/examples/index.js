'use strict';

var React = require('react');
var Section = require('section');
var Pagination = require('../components/pagination');

var PaginationExamples = React.createClass({
	displayName: 'PaginationExamples',


	getComponents: function getComponents() {
		return [React.createElement(Pagination, {
			currentPage: 2,
			totalPages: 5,
			buttonType: 'secondary',
			className: 'course'
		})];
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Section, {
				title: 'Pagination',
				components: this.getComponents(),
				shouldDisplayAsBlock: true
			})
		);
	}

});

module.exports = PaginationExamples;