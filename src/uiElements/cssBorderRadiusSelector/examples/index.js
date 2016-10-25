var React = require('react');
var Section = require('section');
var CssBorderRadiusSelector = require('../components/cssBorderRadiusSelector');

var CssBorderRadiusSelectorExamples = React.createClass({

	getInitialState: function() {
		return {
			topLeft: false,
			topRight: false,
			bottomRight: false,
			bottomLeft: false,
		}
	},

	getComponents: function() {
		return [
			<CssBorderRadiusSelector 
				topLeft={this.state.topLeft}
				topRight={this.state.topRight}
				bottomRight={this.state.bottomRight}
				bottomLeft={this.state.bottomLeft}
				onChange={this.onChange}
			/>
		]
	},

	onChange: function(topLeft, topRight, bottomRight, bottomLeft) {
		this.setState({
			topLeft: topLeft,
			topRight: topRight,
			bottomRight: bottomRight,
			bottomLeft: bottomLeft
		})

		console.log(arguments);
	},

	render: function() {
		return (
			<div>
				<Section
					title="Css Border Radius Selector"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = CssBorderRadiusSelectorExamples;