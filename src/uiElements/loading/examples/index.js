var React = require('react');
var Section = require('section');
var Loading = require('../components/loading');

var LoadingExamples = React.createClass({

	getComponents: function() {
		return [
			<Loading 
				hasDataLoading={false}>
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
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = LoadingExamples;