'use strict';

var React = require('react');
var FlatButton = require('../../buttons/components/flatButton');

var Message = React.createClass({
	displayName: 'Message',


	getImage: function getImage() {
		if (this.props.avatar) {
			return React.createElement('img', { src: this.props.avatar, className: 'message-item-image' });
		}
	},

	getTitle: function getTitle() {
		if (this.props.title) {
			return React.createElement(
				'h3',
				{ className: 'message-item-title' },
				this.props.title
			);
		}
	},

	getBody: function getBody() {
		if (this.props.body) {
			return React.createElement(
				'div',
				{ className: 'message-item-body' },
				this.props.body
			);
		}
	},

	getIconClassName: function getIconClassName() {
		return "message-item-icon icon icon-" + this.props.icon;
	},

	getIconStyle: function getIconStyle() {
		return {
			color: this.props.iconColor
		};
	},

	getIcon: function getIcon() {
		if (this.props.icon && this.props.iconColor) {
			return React.createElement('i', { className: this.getIconClassName(), style: this.getIconStyle() });
		} else if (this.props.icon) {
			return React.createElement('i', { className: this.getIconClassName() });
		}
	},

	getAuthor: function getAuthor() {
		if (this.props.author) {
			return React.createElement(
				'div',
				{ className: 'message-item-author' },
				this.props.author
			);
		}
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'message-item clearfix' },
			React.createElement(FlatButton, {
				className: 'message-item-close',
				icon: 'cross',
				onClick: this.props.onCloseButtonClicked }),
			this.getIcon(),
			React.createElement(
				'div',
				{ className: 'message-item-content clearfix', onClick: this.props.onClick },
				React.createElement(
					'div',
					{ className: 'message-item-content-left' },
					this.getImage()
				),
				React.createElement(
					'div',
					{ className: 'message-item-content-right' },
					this.getTitle(),
					this.getBody(),
					this.getAuthor()
				)
			)
		);
	}

});

module.exports = Message;