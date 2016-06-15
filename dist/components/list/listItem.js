'use strict';

var React = require('react');
var FlatButton = require('../buttons/flatButton');
var ListItemWrapper = require('../wrappers/listItemWrapper');

var ListItem = React.createClass({
	displayName: 'ListItem',


	renderButtons: function renderButtons() {
		if (this.props.buttons) {
			return _.map(this.props.buttons, function (button, key) {
				return React.createElement(FlatButton, {
					type: button.type,
					icon: button.icon,
					onClick: button.onClick,
					key: key
				});
			});
		}
	},

	renderIcon: function renderIcon() {
		if (this.props.icon) {
			return React.createElement('i', { className: "icon icon-" + this.props.icon });
		};
	},

	renderListItemDetail: function renderListItemDetail() {
		if (this.props.itemDetail) {
			return React.createElement(
				'div',
				{ className: 'list-item-detail' },
				this.props.itemDetail
			);
		}
	},

	renderItems: function renderItems() {
		if (!this.props.component) {
			return React.createElement(
				'li',
				{ className: 'list-item' },
				React.createElement(
					ListItemWrapper,
					this.props,
					React.createElement(
						'div',
						{ className: 'list-item-icon' },
						this.renderIcon()
					),
					React.createElement(
						'div',
						{ className: 'list-item-content' },
						React.createElement(
							'div',
							{ className: 'list-item-content-inner' },
							React.createElement(
								'div',
								{ className: 'list-item-text' },
								this.props.itemText
							),
							this.renderListItemDetail()
						)
					),
					React.createElement(
						'div',
						{ className: 'list-item-buttons' },
						this.renderButtons()
					)
				)
			);
		} else {
			return React.createElement(
				'li',
				{ className: 'list-item' },
				React.createElement(
					ListItemWrapper,
					this.props,
					this.props.component
				)
			);
		}
	},

	render: function render() {
		return this.renderItems();
	}
});

module.exports = ListItem;