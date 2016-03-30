var React = require('react');

var Toggle = React.createClass({

	render: function() {
	console.log('Toggle rendered')	
		return (
			<div className="article-styles-item">
				<div className="article-styles-item-title">{this.props.title}</div>
				<label className="article-alternative-label" htmlFor="article-alternative-checkbox"></label>
				<input className="article-alternative-toggle" id="article-alternative-checkbox" type="checkbox"/>
			</div>
		);
	}

});

module.exports = Toggle;