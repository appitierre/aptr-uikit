var React = require('react');

var ListItemWrapper = React.createClass({

	getAccessibilityTags: function() {
		return {'tabIndex' : 0}
	},

	renderWrapper: function() {
		if (this.props.onClick && !this.props.buttons) {
			return (
				<a className="list-item-clickable" onClick={this.props.onClick} {...this.getAccessibilityTags()}>
					<div className="list-item-inner clearfix">
					{this.props.children}
					</div>
				</a>
			)
		} else {
			return (
				<div className="list-item-inner clearfix" {...this.getAccessibilityTags()}>
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