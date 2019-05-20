'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var FlatButton = require('../../buttons/components/flatButton');
var ListItemWrapper = require('./listItemWrapper');
var classNames = require('classnames');

var ListItem = React.createClass({
	displayName: 'ListItem',

	getAccessibilityTags: function getAccessibilityTags() {
        return {role: 'listitem'};
    },

	renderButtons: function renderButtons() {
		if (this.props.buttons) {
			return _.map(this.props.buttons, function (button, key) {
				return React.createElement(FlatButton, _extends({}, button, {
					key: key
				}));
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
		var className = classNames('list-item', this.props.className ? this.props.className :'');
		if (!this.props.component) {
			return React.createElement(
				'li',
				_extends({}, this.getAccessibilityTags(), className={className}),
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
							{ className: 'list-item-content-inner', style: this.getIconStyle() },
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
				_extends({}, this.getAccessibilityTags(), className={className}),
				React.createElement(
					ListItemWrapper,
					this.props,
					this.props.component
				)
			);
		}
	},

	getIconStyle: function getIconStyle() {
		if (!this.props.icon) {
			return {
				paddingLeft: 8
			};
		}
	},

	render: function render() {
		return this.renderItems();
	}
});

module.exports = ListItem;