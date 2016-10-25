var React = require('react');
var Section = require('section');
var SearchBar = require('../components/searchBar');

var SearchBarExamples = React.createClass({

	getComponents: function() {
		return [
			<SearchBar 
				onClick={this.onClick} 
    			onChange={this.onChange}
			/>
		]
	},

	onClick: function() {
		console.log("the search button has been clicked")
	},

	onChange: function(value) {
		console.log("the value of the search input:", value)
	},

	render: function() {
		return (
			<div>
				<Section
					title="Search Bar"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = SearchBarExamples;