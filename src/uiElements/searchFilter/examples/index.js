var React = require('react');
var Section = require('section');
var SearchFilter = require('../components/searchFilter');

var SearchFilterExamples = React.createClass({

	getInitialState: function() {
		return {
			searchValue: ""
		}
	},

	getComponents: function() {
		return [
			<SearchFilter
				placeholder="enter text here" 
				onChange={this.onChange}
				value={this.state.value}
				shouldFocusInput={true}
				onFilterChanged={this.onFilterChanged}
				filters={[
					{
						text: 'Filter 1',
						_value: 'Filter 1'
					},
					{
						text: 'Filter 2',
						_value: 'Filter 2'
					},
					{
						text: 'Filter 3',
						_value: 'Filter 3'
					}
				]}
			/>
		]
	},

	onChange: function(value) {
		this.setState({
			searchValue: value
		})
	},

	onFilterChanged: function(value) {
		console.log(value);
	},

	render: function() {
		return (
			<div>
				<Section
					title="Search Filter"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = SearchFilterExamples;