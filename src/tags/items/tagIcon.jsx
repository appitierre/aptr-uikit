var React = require('react');

var TagIcon = React.createClass({

	getIconClassName: function() {
		return 'icon icon-tags'
	},

	getIcon: function() {
		return (
			<i className={this.getIconClassName()}></i>
		)
	},

	render: function() {
	console.log('yes')	
		return (
			//Class Name can change 
			<div className="tag-bar-title"> 
				{this.getIcon()}
				Tags 
			</div>
		);
	}

});

module.exports = TagIcon;