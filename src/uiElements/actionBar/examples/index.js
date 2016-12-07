var React = require('react');
var Section = require('section');
var ActionBar = require('../components/actionBar');

//Components to be used inside of the action bar
var Button = require('../../buttons/components/button');
var SearchBar = require('../../search/components/searchBar');
var Pagination = require('../../pagination/components/pagination');

var ActionBarExamples = React.createClass({

	getComponents: function() {
		return [
			<ActionBar>
				<Button
					text="Action Bar button"
					type="primary"
					icon="action"/>
				<SearchBar 
					/>
				<Pagination
					currentPage={2}
				    totalPages={5}
				    buttonType="secondary"
				    className="course"/>
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