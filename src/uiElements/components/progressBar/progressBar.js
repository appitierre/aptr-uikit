var React = require('react');
var classNames = require('classnames');

/* 
PROPS
value: number
backgroundColor: string
*/

var ProgressBar = React.createClass({

	propTypes: {
		value: React.PropTypes.number.isRequired,
		backgroundColor: React.PropTypes.string,
		className: React.PropTypes.string
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
			<div className={this.renderClassName()}>
				<div className='progress-bar-inner' style={this.getStyle()}>
				</div>
			</div>
		);
	}

});

module.exports = ProgressBar;