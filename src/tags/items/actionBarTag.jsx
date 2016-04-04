var React = require('react');

/* 
PROPS:
-color
-text
-itemCount
-onClick
*/

var ActionBarTag = React.createClass({

	getStyle: function(item) {
		if (this.props.item._isOpen === true) {	
			return {
				backgroundColor: 'red'
			}
		} else if (this.props.item._isOpen === false){
			return {
				backgroundColor: 'blue'
			}
		}
	},	

	getItem: function() {
		return (	
			<button className="action-bar-tag-button" style={this.getStyle()} onClick={this.onItemClicked}>
				{this.props.item.text}
				({this.props.item.itemCount})
			</button>
		)
	},

	onItemClicked: function(item) {	
		if (this.props.item._isOpen === false) {
			this.props.item._isOpen = true;
		} else {
			this.props.item._isOpen = true;
		}

		this.forceUpdate();
	},


	render: function() {
		return (
			<div className="action-bar-tag">
				{this.getItem()}
			</div>
		);
	}

});

module.exports = ActionBarTag;