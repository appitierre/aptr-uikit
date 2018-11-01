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

	getDefaultProps: function() {
		return {
			tabIndex: null
		};
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
			<div
				tabIndex={this.props.tabIndex} 
				className={this.renderClassName()}
				role="progressbar" 
				aria-valuenow={this.props.ariaValueNow}
				aria-valuemin={this.props.ariaValueMin} 
				aria-valuemax={this.props.ariaValueMax}>
				<div 
					className='progress-bar-inner' 
					style={this.getStyle()} />
			</div>
		);
	}

});

module.exports = ProgressBar;