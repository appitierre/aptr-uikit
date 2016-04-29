var React = require('react');

//## Flat Button

// @PROPS:
// ClassName: String,
// Icon: String,
// onClick: Function, 

var FlatButton = React.createClass({

	//The flat button component has a set className of button and what ever className has been passed
    //in will be added on too the end.
	getButtonClassName: function() {
		return 'button-flat ' + this.props.className;
	},

	//Similar to the button className function, this takes in an icon prop. Make sure that the icon you pass in is
    //part of the linear icon pack.
	getIcon: function() {
		return (
			<i className={' icon icon-' + this.props.icon}></i>
		)
	},

	//Renders the entire flat button.
	render: function() {
		return (
			<button className={this.getButtonClassName()} onClick={this.props.onClick}>
				{this.getIcon()}
			</button>
		);
	}

});

module.exports = FlatButton;