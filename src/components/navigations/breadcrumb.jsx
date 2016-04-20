var React = require('react');

/* 
PROPS:
Text: String
Icon: String
onClick: Function 
*/

var HorizontalNavigation = React.createClass({

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
			<div className="breadcrumb">
				<div className="crumb">
					<a href={this.props.href}>
						{this.props.text}
						{this.getIcon()}
					</a>
				</div>
			</div>
		);
	}

});

module.exports = HorizontalNavigation;