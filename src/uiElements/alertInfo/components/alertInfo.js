var React = require('react');
var classNames = require('classnames');

var AlertInfo = React.createClass({

	getClassName: function() {
		if(!this.props.icon) {
			return classNames('alert-info no-icon' + ' ' + this.props.type);
		} else {
			return classNames('alert-info' + ' ' + this.props.type);
		}
	},

	getIconClassName: function() {
		return 'icon icon-' + this.props.icon;
	},

	render: function() {
		return (
			<div className={this.getClassName()}>
				<div className="alert-info-inner">
					<i className={this.getIconClassName()}></i>
					<span>{this.props.text}</span>
				</div>
			</div>
		);
	}
});

module.exports = AlertInfo;