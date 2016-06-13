var React = require('react');

var ListItemWrapper = React.createClass({

	renderWrapper: function() {
		if (this.props.onClick && !this.props.buttons) {
			return (
				<button className="list-item-clickable" onClick={this.props.onClick}>
					<div className="list-item-inner clearfix">
					{this.props.children}
					</div>
				</button>
			)
		} else {
			return (
				<div className="list-item-inner clearfix">
					{this.props.children}
				</div>
			)
		}
	},

	render: function() {
		return this.renderWrapper()
	}
});

module.exports = ListItemWrapper;