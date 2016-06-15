var React = require('react');
var classNames = require('classnames');

var ProgressIndicator = React.createClass({

	renderClassName: function() {
		return classNames('progress-indicator', this.props.className);
	},

	getBackgroundcolor: function() {
		if (this.props.backgroundColor) {
			return this.props.backgroundColor
		}
	},

	getProgress: function() {
		
	},

	getStyle: function() {
		return {
			width: this.getProgress(),
			backgroundColor: this.getBackgroundcolor()
		}
	},

	render: function() {
		return (
			<div className={this.renderClassName()}>
				<div className="progress-indicator-inner" style={this.getStyle()}>
				</div>
			</div>
		);
	}

});

module.exports = ProgressIndicator;