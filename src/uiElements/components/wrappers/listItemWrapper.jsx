var React = require('react');

var ListItemWrapper = React.createClass({

	renderWrapper: function() {
		if (this.props.onClick && !this.props.buttons) {
			return (
				<button className="list-item-wrapper full-width" onClick={this.props.onClick}>
					{this.props.children}
				</button>
			)
		} else {
			return (
				<div className="list-item-wrapper full-width">
					{this.props.children}
				</div>
			)
		}
	},

	render: function() {
		return (
			<div>
				{this.renderWrapper()}
			</div>
		);
	}
});

module.exports = ListItemWrapper;