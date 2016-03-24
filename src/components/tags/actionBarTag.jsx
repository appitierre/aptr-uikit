var React = require('react');

var ActionBarTag = React.createClass({

	getStyle: function() {
		return {
			backgroundColor: this.props.color
		}	
	},

	render: function() {
	console.log(this.props)	
		return (
			<div>
				<button className="action-bar-tag" style={this.getStyle()} onClick={this.props.onClick}>
					{this.props.text}
					({this.props.itemCount})
				</button>
			</div>
		);
	}

});

module.exports = ActionBarTag;