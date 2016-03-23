var React = require('react');

var FlatButton = React.createClass({

	getIconClassName: function() {
		return ' icon icon-' + this.props.icon;
	},

	getIcon: function() {
		return (
			<i className={this.getIconClassName()}></i>
		)
	},

	render: function() {
		return (
			<button className={this.props.className} onClick={this.props.onClick}>
				{this.getIcon()}
			</button>
		);
	}

});

module.exports = FlatButton;