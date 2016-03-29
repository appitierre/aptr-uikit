var React = require('react');

/* 
PROPS:
Icon: String
OnClick: Function
ClassName: String
*/

var RadioButton = React.createClass({

	getInitialState: function() {
		
		return {
			isClicked: false
		}
	},
	
	getIconClassName: function() {
	  	
	  	return ' icon icon-' + this.props.icon;
	},

	getIcon: function() {
		
		if (this.state.isClicked === true) {
			return (
				<i className={this.getIconClassName()}></i>
			)
		}
	},

	getClassName: function() {
		
		if (this.state.isClicked === true) {
			return this.props.className + ' selected' 
		} else {
			return this.props.className
		}
	},

	getItemClassName: function() {

		if (this.state.isClicked === true) {
			return 'settings-image selected' + ' selected' 
		} else {
			return 'settings-image'
		}
	},
	
	handleClick: function() {

		this.setState({
			isClicked: true
		})
		
		this.props.onClick;
	},	

	render: function() {
	console.log(this.state)	
		return (
			<div>
				<div className={this.getItemClassName()}>
					<img src="css/images/emu.jpg"/>
				</div>
				<div className={this.getClassName()} onClick={this.handleClick}>
					{this.getIcon()}
				</div>
			</div>
		);
	}

});

module.exports = RadioButton;