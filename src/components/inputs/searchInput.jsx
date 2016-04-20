var React = require('react');

var SearchInput = React.createClass({

	render: function() {
	console.log('search input rendered')	
		return (
			<div className="search-input">
				<input className="search-input-inner"/>
				<button className="search-input-button button" onClick={this.props.onClick}>
					<i className="icon icon-magnifier"/> 
				</button>
			</div>
		);
	}

});

module.exports = SearchInput;