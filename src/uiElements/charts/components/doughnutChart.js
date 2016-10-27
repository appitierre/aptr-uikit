var React = require('react');
var Doughnut = require('chart.js');


var data = [
	{
		name: "Brandon Karunakaran",
		age: "17"
	}
]

var DoughnutChart = React.createClass({

	render: function() {	
		return (
			<div>
				<Doughnut
					data={data} 
					width={100}
					height={50}
					options={{
						maintainAspectRatio: false
					}}
				/>
			</div>
		);
	}

});

module.exports = DoughnutChart;