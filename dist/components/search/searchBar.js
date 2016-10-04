'use strict';

var React = require('react');
var Button = require('../buttons/button');
var classNames = require('classnames');

var SearchBar = React.createClass({
	displayName: 'SearchBar',


	getInitialState: function getInitialState() {
		return {
			value: ''
		};
	},

	getButton: function getButton() {
		var Height = false;

		if (this.props.isSmall === true) {
			var Height = true;
		}

		if (this.state.value.length === 0) {
			return React.createElement(Button, { icon: 'magnifier', className: 'search-bar-button', isSmall: Height });
		} else {
			return React.createElement(Button, { icon: 'cross-circle', className: 'primary search-bar-button', onClick: this.onButtonClicked, isSmall: Height });
		}
	},

	getClassName: function getClassName() {
		return classNames('search-bar', this.props.className);
	},

	getInputClassName: function getInputClassName() {
		if (this.props.isSmall === true) {
			return classNames('search-bar-input', 'small');
		} else {
			return classNames('search-bar-input');
		}
	},

	onButtonClicked: function onButtonClicked(event) {
		event.preventDefault();
		this.setState({
			value: ''
		});
		this.props.onChange('');
	},

	onChange: function onChange(event) {
		var value = event.target.value;
		this.props.onChange(value);

		this.setState({
			value: value
		});
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: this.getClassName() },
			React.createElement('input', { className: this.getInputClassName(), value: this.state.value, onChange: this.onChange }),
			this.getButton()
		);
	}
});

module.exports = SearchBar;