var React = require('react');

/* 
PROPS
width: number
backgroundColor: string
*/

var ProgressBar = React.createClass({

	componentWillMount: function() {
		if (!this.props.width) {
			console.warn("You're currently width property");
		}
	},

	renderClassName: function() {
		if (this.props.className) {
			return 'progress-bar' + this.props.className 
 		} else {
 			return 'progress-bar'
 		}
	},

	getBackgroundcolor: function() {
		if (this.props.backgroundColor) {
			return this.props.backgroundColor
		}
	},

	getStyle: function() {
		return {
			width: this.props.progress,
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