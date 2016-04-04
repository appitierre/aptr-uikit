var React = require('react');

var createTag = React.createClass({

	getIconClassName: function() {
		return 'icon icon-plus'
	},

	getIcon: function() {
		return (
			<i className={this.getIconClassName()}></i>
		)
	},

	render: function() {
		return (
			<div className="action-bar-tag-create">
				<button onClick={this.props.onClick}>
					{this.getIcon()}
				</button>
			</div>
		);
	}

});

module.exports = createTag;