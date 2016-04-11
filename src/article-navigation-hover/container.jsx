var React = require('react');
var ArticleNavigation = require('./items/articleNavigation.jsx');

var Container = React.createClass({

	
	
	render: function() {
		return (
			<div>
				<ArticleNavigation />
			</div>
		);
	}

});

module.exports = Container;