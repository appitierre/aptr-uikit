'use strict';

var React = require('react');
var Button = require('../../buttons/components/button');
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
		if (this.props.isSmall) {
			return classNames('search-bar', this.props.className, 'is-small');
		} else {
			return classNames('search-bar', this.props.className);
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

	renderPlaceHolder: function renderPlaceHolder() {
		if (this.props.placeholder) {
			return this.props.placeholder;
		};
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: this.getClassName() },
			React.createElement('input', { className: 'search-bar-input', value: this.state.value, onChange: this.onChange, placeholder: this.renderPlaceHolder() }),
			this.getButton()
		);
	}
});

module.exports = SearchBar;