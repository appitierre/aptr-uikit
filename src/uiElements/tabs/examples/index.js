var React = require('react');
var Section = require('section');
var Tabs = require('../components/tabs');

var TabsExamples = React.createClass({

	getInitialState: function() {
		return {
			tabsValue: "Item one"
		}
	},

	getComponents: function() {
		return [
			<Tabs 
				items={[
					{
						icon: "pencil4",
						label: "Item one",
						component: <div>Hello</div>,
						value: "Item one"
					},
					{
						icon: "pencil4",
						label: "Item two",
						component: <div>Hi</div>,
						value: "Item two"
					}

				]}
				value={this.state.tabsValue}
				onChange={this.onChange} 
			/>
		]
	},

	onChange: function(value) {
		console.log(value);

		this.setState({
			tabsValue: value
		})
	},

	render: function() {
		return (
			<div>
				<Section
					title="Tabs"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = TabsExamples;