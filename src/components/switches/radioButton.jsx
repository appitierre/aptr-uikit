var React = require('react');

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
	
	handleClick: function() {

		this.setState({
			isClicked: true
		})
		
		this.props.onClick;
	},	

	render: function() {
	console.log(this.state)	
		return (
			<div className={this.getClassName()} onClick={this.handleClick}>
				{this.getIcon()}
			</div>
		);
	}

});

module.exports = RadioButton;