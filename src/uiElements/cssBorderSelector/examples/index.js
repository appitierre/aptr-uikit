var React = require('react');
var Section = require('section');
var CssBorderSelector = require('../components/cssBorderSelector');

var CssBorderSelectorExamples = React.createClass({

	getInitialState: function() {
		return {
			top: false,
			right: false,
			bottom: true,
			left: true
		};
	},

	getComponents: function() {
		return [
			<CssBorderSelector
				top={this.state.top}
				right={this.state.right}
				bottom={this.state.bottom}
				left={this.state.left}
				onChange={this.onChange}
			/> 			
		];
	},

	onChange: function(top, right, bottom, left) {
		this.setState({
			top: top,
			right: right,
			bottom: bottom,
			left: left
		});

		console.log(arguments);
	},

	render: function() {
		return (
			<div>
				<Section
					title="Css Border Selector"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = CssBorderSelectorExamples;