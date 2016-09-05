var React = require('react');
var classNames = require('classnames');

var Alert = React.createClass({

	propTypes: {
		className: React.PropTypes.string,
		type: React.PropTypes.string.isRequired,
		icon: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired
	},

	getClassName: function() {
		return classNames('alert' + ' ' + this.props.className + ' ' + this.props.type);
	},

	getIconClassName: function() {
		return 'icon icon-' + this.props.icon;
	},

	render: function() {
		return (
			<div className={this.getClassName()}>
				<div className="alert-inner">
					<i className={this.getIconClassName()}></i>
					<span>{this.props.text}</span>
				</div>
			</div>
		);
	}
});

module.exports = Alert;

<Alert type={2}/>