var React = require('react');

var ListItem = React.createClass({

	getItems: function() {
		return _.map(this.props.items, function(item) {
			return (
				<div>
					{item.title}
					{item.body}
				</div>
			)
		})
	},

	render: function() {
	console.log(this.props)
		return (
			<div className="list-item">
				{this.getItems()}
			</div>
		);
	}

});

module.exports = ListItem;