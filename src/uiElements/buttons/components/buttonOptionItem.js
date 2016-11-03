var React = require('react');

var ButtonOptionItem = React.createClass({

	onClick: function() {
		this.props.onClick(this.props.value);
	},

	renderBody: function() {
		return (
			this.props.body
		);
	},

	render: function() {
		return (
			<div className="button-options-list-item" onClick={this.onClick}>
				<div className="button-options-list-item-title">
					{this.props.text}
				</div>
				<span className="button-options-list-item-body">
					{this.renderBody()}
				</span>
			</div>
		);
	}

});

module.exports = ButtonOptionItem;