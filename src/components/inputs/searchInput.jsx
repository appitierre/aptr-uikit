var React = require('react');
/* 

PROPS:
	OnClick: function
	searchButton: button prop
*/

var SearchInput = React.createClass({

	render: function() {	
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