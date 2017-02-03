var React = require('react');
var Section = require('section');
var Loading = require('../components/loading');

var LoadingExamples = React.createClass({

	getComponents: function() {
		return [
			<Loading 
				hasDataLoaded={false}>
				<div>
					DATA HAS LOADED
				</div>
			</Loading>,
			<Loading 
				hasDataLoaded={true}>
				<div>
					DATA HAS LOADED
				</div>
			</Loading>
		]
	},

	render: function() {
		return (
			<div>
				<Section
					title="Loading"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = LoadingExamples;