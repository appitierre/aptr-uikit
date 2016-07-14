var React = require('react');
var FlatButton = require('../buttons/flatButton');

var Message = React.createClass({

	getImage: function() {
		if (this.props.avatar) {
			return (
				<img src={this.props.avatar} className="message-item-image"/>
			)
		}
	},

	getTitle: function() {
		if (this.props.title) {
			return (
				<h3 className="message-item-title">
					{this.props.title}
				</h3>
			)
		}
	},

	getBody: function() {
		if (this.props.body) {
			return (
				<div className="message-item-body">
					{this.props.body}
				</div>
			)
		}
	},

	getIconClassName: function() {
		return "message-item-icon icon icon-" + this.props.icon
	},

	getIcon: function() {
		if (this.props.icon) {
			return (
				<i className={this.getIconClassName()} />
			)
		}
 	},

	closeOnClick: function() {
		this.props.onCloseButtonClicked
	},

	render: function() {
		return (
			<div className="message-item clearfix">
				<FlatButton 
					className="message-item-close"
					icon="cross"
					onClick={this.closeOnClick}/>
				{this.getIcon()}
				<div className="message-item-content clearfix" onClick={this.props.onClick}>	
					<div className="message-item-content-left"> 	
						{this.getImage()}
					</div>
					<div className="message-item-content-right">
						{this.getTitle()}
						{this.getBody()}
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Message;