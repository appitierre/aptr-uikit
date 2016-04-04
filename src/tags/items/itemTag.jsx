var React = require('react');

/*
PROPS:
text: attribute
color: attribute
onClick: function
isSelected: boolean, -- if true will return an icon!

*/

var ItemTag = React.createClass({

	getIconClassName: function() {
		return ' icon icon-' + 'trash';
	},	

	getIcon: function() {	
		if(this.props.isSelected === true) {	
			return (
				<i className={this.getIconClassName()}></i>	
			)
		}
	},

	getStyle: function() {
		return {
			backgroundColor: this.props.color
		}	
	},
		
	render: function() {
		console.log(this.props.isSelected)
		return (
			<div>
				<button className="item-tag" style={this.getStyle()} onClick={this.props.onClick}>
					{this.props.text}
					{this.getIcon()}
				</button>
			</div>
		);
	}

});

module.exports = ItemTag;