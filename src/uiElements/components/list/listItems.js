var React = require('react');

var listItemContainer = React.createClass({

	render: function() {
		return (
			<ul className="list-items">
				{this.props.children}
			</ul>
		);
	}

});

module.exports = listItemContainer;