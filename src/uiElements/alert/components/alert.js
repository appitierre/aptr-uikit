var React = require('react');
var classNames = require('classnames');

var Alert = React.createClass({

	getClassName: function() {
		return classNames('alert', this.props.className, this.props.type);
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