var React = require('react');

var SelectOptionsItem = React.createClass({

	onOptionClicked: function() {
		this.props.onClick(this.props.value);
	},

	render: function() {
		return (
			<div className="select-options-item" onClick={this.onOptionClicked}>
				{this.props.text}
			</div>
		);
	}

});

module.exports = SelectOptionsItem;