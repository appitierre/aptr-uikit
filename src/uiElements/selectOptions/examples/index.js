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
				iconPosition="left"
			    value={this.state.value}
			    initialText="Select a sort option"
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