var React = require('react');
var Section = require('section');
var DoughnutChart = require('../components/doughnutChart');//Canvas errors won't work
//Other chart won't install because of all dependencies

var DoughnutChartExamples = React.createClass({

	getComponents: function() {
		return [
			
		]
	},

	render: function() {
		return (
			<div>
				<Section
					title="Doughnut Chart"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = DoughnutChartExamples;