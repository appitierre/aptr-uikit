var React = require('react');

/* 

PROPS:
ClassName: String
Icon: String
onClick: Function 

*/

var FlatButton = React.createClass({

	getButtonClassName: function() {
		return 'button-flat ' + this.props.className;
	},

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
			<button className={this.getButtonClassName()} onClick={this.props.onClick}>
				{this.getIcon()}
			</button>
		);
	}

});

module.exports = FlatButton;