var React = require('react');
var TagBar = require('./items/tagBar.jsx');

var app = React.createClass({
	
	render: function() {	
		return (
			<div>
				<TagBar />
			</div>
		);
	}
});

module.exports = app;