var React = require('react');

var ClearTag = React.createClass({

	getIconClassName: function() {
		return 'icon icon-cross'
	},

	getIcon: function() {
		return (
			<i className={this.getIconClassName()}></i>
		)
	},

	render: function() {
		return (
			<div className="action-bar-tag-clear">
				<button onClick={this.props.onClick}>
					{this.getIcon()}
				</button>
			</div>
		);
	}

});

module.exports = ClearTag;