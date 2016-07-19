'use strict';

var React = require('react');
var classnames = require('classnames');
var Button = require('../buttons/button');

var CssBorderSelector = React.createClass({
	displayName: 'CssBorderSelector',


	getButtonType: function getButtonType() {
		if (this.props.top && this.props.right && this.props.bottom && this.props.left) {
			return {
				top: '',
				right: '',
				bottom: '',
				left: '',
				center: 'primary'
			};
		}

		return {
			top: classnames({ 'primary': this.props.top }),
			right: classnames({ 'primary': this.props.right }),
			bottom: classnames({ 'primary': this.props.bottom }),
			left: classnames({ 'primary': this.props.left }),
			center: ''
		};
	},

	getItems: function getItems() {
		return React.createElement(
			'div',
			{ className: 'css-selector' },
			React.createElement(
				'div',
				{ className: 'css-selector-top' },
				React.createElement(
					'button',
					{
						className: 'button css-selector-top-button',
						type: this.getButtonType().top,
						onClick: this.onTopButtonClicked },
					React.createElement('span', { className: 'css-selector-top-icon' })
				)
			),
			React.createElement(
				'div',
				{ className: 'css-selector-middle' },
				React.createElement(Button, {
					icon: 'square',
					className: 'css-selector-left-button',
					type: this.getButtonType().left,
					onClick: this.onLeftButtonClicked
				}),
				React.createElement(Button, {
					icon: 'square',
					className: 'css-selector-centre-button',
					type: this.getButtonType().center,
					onClick: this.onCentreButtonClicked
				}),
				React.createElement(Button, {
					icon: 'square',
					className: 'css-selector-right-button',
					type: this.getButtonType().right,
					onClick: this.onRightButtonClicked
				})
			),
			React.createElement(
				'div',
				{ className: 'css-selector-bottom' },
				React.createElement(Button, {
					icon: 'square',
					className: 'css-selector-bottom-button',
					type: this.getButtonType().bottom,
					onClick: this.onBottomButtonClicked
				})
			)
		);
	},

	onTopButtonClicked: function onTopButtonClicked(event) {
		event.preventDefault();
		var props = this.props;
		if (props.top && props.right && props.bottom && props.left) {
			this.props.onChange(true, false, false, false);
		} else {
			this.props.onChange(!props.top, props.right, props.bottom, props.left);
		}
	},

	onLeftButtonClicked: function onLeftButtonClicked(event) {
		event.preventDefault();
		var props = this.props;
		if (props.top && props.right && props.bottom && props.left) {
			this.props.onChange(false, false, false, true);
		} else {
			this.props.onChange(props.top, props.right, props.bottom, !props.left);
		}
	},

	onCentreButtonClicked: function onCentreButtonClicked(event) {
		event.preventDefault();
		var props = this.props;
		if (props.top && props.right && props.bottom && props.left) {
			this.props.onChange(false, false, false, false);
		} else {
			this.props.onChange(true, true, true, true);
		}
	},

	onRightButtonClicked: function onRightButtonClicked(event) {
		event.preventDefault();
		var props = this.props;
		if (props.top && props.right && props.bottom && props.left) {
			this.props.onChange(false, true, false, false);
		} else {
			this.props.onChange(props.top, !props.right, props.bottom, props.left);
		}
	},

	onBottomButtonClicked: function onBottomButtonClicked(event) {
		event.preventDefault();
		var props = this.props;
		if (props.top && props.right && props.bottom && props.left) {
			this.props.onChange(false, false, true, false);
		} else {
			this.props.onChange(props.top, props.right, !props.bottom, props.left);
		}
	},

	render: function render() {
		return this.getItems();
	}

});

module.exports = CssBorderSelector;