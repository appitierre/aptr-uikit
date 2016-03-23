var React = require('react');

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
				<div classnName="crumb">
					<a href={this.props.href}>
						{this.props.text}
					</a>
				</div>
				{this.getIcon()}
			</div>
		);
	}

});

module.exports = HorizontalNavigation;