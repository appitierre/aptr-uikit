var React = require('react');
var classNames = require('classnames');

/* 
PROPS
value: number
backgroundColor: string
*/

var ProgressBar = React.createClass({

	componentWillMount: function() {
		if (_.isUndefined(this.props.value) || !_.isNumber(this.props.value)) {
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
		return this.props.value + '%' 
	},	

	getStyle: function() {
		return {
			width: this.getProgress(),
			backgroundColor: this.getBackgroundcolor()
		}
	},

	render: function() {
		return (
			<div className={this.renderClassName()} aria-valuenow={this.getProgress()} aria-valuetext="completion" role="progressbar" aria-valuemin="0" aria-valuemax="100">
				<div className='progress-bar-inner' style={this.getStyle()}>
				</div>
			</div>
		);
	}

});

module.exports = ProgressBar;