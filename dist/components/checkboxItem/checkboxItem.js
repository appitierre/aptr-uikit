'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var CheckboxItemWrapper = require('./checkboxItemWrapper');

var Checkbox = React.createClass({
	displayName: 'Checkbox',


	getInitialState: function getInitialState() {
		return {
			_isChecked: false
		};
	},

	onClick: function onClick() {

		this.setState({
			_isChecked: !this.state._isChecked
		});

		if (this.props.onClick) {
			this.props.onClick();
		}

		console.log('clicked', this.state._isChecked);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'checkbox-item' },
			React.createElement('input', { type: 'checkbox', id: this.props.id, checked: this.state._isChecked }),
			React.createElement(
				CheckboxItemWrapper,
				_extends({}, this.props, { onClick: this.onClick }),
				React.createElement(
					'label',
					{ htmlFor: this.props.id },
					React.createElement(
						'div',
						{ className: 'checkbox-item-state' },
						React.createElement('div', { className: 'checkbox-item-state-default icon' })
					),
					React.createElement(
						'span',
						{ className: 'checkbox-item-text' },
						this.props.itemText
					)
				)
			)
		);
	}

});

module.exports = Checkbox;