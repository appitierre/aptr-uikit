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

	render: function() {
		return (
			<div className="message-item clearfix">
				<FlatButton 
					className="message-item-close"
					icon="cross"
					onClick={this.closeOnClick}/>
				<div className="message-item-content" onClick={this.props.onClick}>	
					{this.getImage()}
					{this.getTitle()}
					{this.getBody()}
				</div>
			</div>
		);
	}

});

module.exports = Message;