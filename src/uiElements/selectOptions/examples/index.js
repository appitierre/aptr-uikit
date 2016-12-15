var React = require('react');
var Section = require('section');
var SelectOptions = require('../components/selectOptions');

var SelectOptionExamples = React.createClass({

	getInitialState: function() {
		return {
			value: ''
		}
	},

	getComponents: function() {
		return [
			<SelectOptions 
				className="options"
				type="primary"
			    value={this.state.value}
			    initialText="Select options left"
			    onChange={this.onSelectOptionChanged}
			    options={[
			        {
			            text: 'Ascending',
			            _value: 'ascending'
			       },
			       {
			           text: 'Descending',
			           _value: 'descending'
			       },
			       {
			          text: 'Recent',
			          _value: 'recent'
			       },
			       {
			         text: 'Oldest',
			         _value: 'oldest'
			       }
			    ]}
			/>,
			<SelectOptions 
				className="options"
				type="secondary"
				iconPosition="right"
				value={this.state.value}
			    initialText="Select Option Right"
			    onChange={this.onSelectOptionChanged}
			    options={[
			        {
			            text: 'Ascending',
			            _value: 'ascending'
			       },
			       {
			           text: 'Descending',
			           _value: 'descending'
			       },
			       {
			          text: 'Recent',
			          _value: 'recent'
			       },
			       {
			         text: 'Oldest',
			         _value: 'oldest'
			       }
			    ]}
			/>
		]
	},

	onSelectOptionChanged: function(value) {
		this.setState({
			value: value
		})
	},

	render: function() {
		return (
			<div>
				<Section
					title="Select Option"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = SelectOptionExamples;