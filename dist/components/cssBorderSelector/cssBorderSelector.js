'use strict';

var React = require('react');
var classnames = require('classnames');
var Button = require('../buttons/button');

var CssBorderSelector = React.createClass({
	displayName: 'CssBorderSelector',


	getClassName: function getClassName() {
		if (this.props.top && this.props.right && this.props.bottom && this.props.left) {
			return {
				top: 'button css-border-selector-button css-border-selector-button-top',
				right: 'button css-border-selector-button css-border-selector-button-right',
				bottom: 'button css-border-selector-button css-border-selector-button-bottom',
				left: 'button css-border-selector-button css-border-selector-button-left',
				centre: 'button css-border-selector-button css-border-selector-button-center primary'
			};
		}

		return {
			top: classnames({ 'button css-border-selector-button css-border-selector-button-top primary': this.props.top }, { 'button css-border-selector-button css-border-selector-button-top': !this.props.top }),

			right: classnames({ 'button css-border-selector-button css-border-selector-button-right primary': this.props.right }, { 'button css-border-selector-button css-border-selector-button-right': !this.props.right }),

			bottom: classnames({ 'button css-border-selector-button css-border-selector-button-bottom primary': this.props.bottom }, { 'button css-border-selector-button css-border-selector-button-bottom': !this.props.bottom }),

			left: classnames({ 'button css-border-selector-button css-border-selector-button-left primary': this.props.left }, { 'button css-border-selector-button css-border-selector-button-left': !this.props.left }),

			centre: classnames({ 'button css-border-selector-button css-border-selector-button-center': !this.props.centre })
		};
	},

	getItems: function getItems() {
		return React.createElement(
			'div',
			{ className: 'css-border-selector' },
			React.createElement(
				'div',
				{ className: 'css-border-selector-top' },
				React.createElement(
					'button',
					{
						className: this.getClassName().top,
						onClick: this.onTopButtonClicked },
					React.createElement('span', { className: 'css-border-selector-button-icon-top' })
				)
			),
			React.createElement(
				'div',
				{ className: 'css-border-selector-middle' },
				React.createElement(
					'button',
					{
						className: this.getClassName().left,
						onClick: this.onLeftButtonClicked },
					React.createElement('span', { className: 'css-border-selector-button-icon-left' })
				),
				React.createElement(
					'button',
					{
						className: this.getClassName().centre,
						onClick: this.onCentreButtonClicked },
					React.createElement('span', { className: 'css-border-selector-button-icon-center' })
				),
				React.createElement(
					'button',
					{
						className: this.getClassName().right,
						onClick: this.onRightButtonClicked },
					React.createElement('span', { className: 'css-border-selector-button-icon-right' })
				)
			),
			React.createElement(
				'div',
				{ className: 'css-border-selector-bottom' },
				React.createElement(
					'button',
					{
						className: this.getClassName().bottom,
						onClick: this.onBottomButtonClicked },
					React.createElement('span', { className: 'css-border-selector-button-icon-bottom' })
				)
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