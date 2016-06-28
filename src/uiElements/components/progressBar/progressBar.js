var React = require('react');
var classNames = require('classnames');

/* 
PROPS
progress: number
backgroundColor: string
*/

var ProgressBar = React.createClass({

	componentWillMount: function() {
		if (!this.props.progress) {
			console.warn("You're currently missing progress property");
		}
	},

	renderClassName: function() {
		return classNames('progress-bar', this.props.className);
	},

	getBackgroundcolor: function() {
		if (this.props.backgroundColor) {
			return this.props.backgroundColor
		}
	},

	getProgress: function() {
		if (this.props.progress) {
			return this.props.progress + '%'
		}
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
				<div className='progress-bar-inner' style={this.getStyle()}>
				</div>
			</div>
		);
	}

});

module.exports = ProgressBar;