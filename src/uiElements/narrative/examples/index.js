var React = require('react');
var Section = require('section');
var Narrative = require('../components/narrative');

var NarrativeExamples = React.createClass({

	getInitialState: function() {
		return {
			stage: 0
		}
	},

	getComponents: function() {
		return [
			<Narrative
				onChange={this.onChange}
				stage={this.state.stage}
				_items={[
					{
						title: "Narrative Item title 1",
						body: "Narrative Item body 1",
						itemIndex: 0,
						_graphic: {
							src: "http://placehold.it/1024x300"
						}
					},
					{
						title: "Narrative Item title 2",
						body: "Narrative Item body 2",
						itemIndex: 1,
						_graphic: {
							src: "http://placehold.it/1024x300"
						}
					},
					{
						title: "Narrative Item title 3",
						body: "Narrative Item body 3",
						itemIndex: 1,
						_graphic: {
							src: "http://placehold.it/1024x300"
						}
					}
				]}
			/>
		]
	},

	onChange: function(stage) {
		this.setState({
			stage: stage
		})
	},

	render: function() {
		return (
			<Section
				title="Narrative"
				components={this.getComponents()}
				shouldDisplayAsBlock={true}
			/>
		);
	}

});

module.exports = NarrativeExamples;