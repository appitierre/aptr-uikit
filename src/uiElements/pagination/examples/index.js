var React = require('react');
var Section = require('section');
var Pagination = require('../components/pagination');

var PaginationExamples = React.createClass({

	getComponents: function() {
		return [
			<Pagination 
				currentPage={2}
			    totalPages={5}
			    buttonType="secondary"
			    className="course"
			/>
		]
	},

	render: function() {
		return (
			<div>
				<Section
					title="Pagination"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = PaginationExamples;