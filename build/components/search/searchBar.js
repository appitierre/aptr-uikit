'use strict';

var React = require('react');

var SearchBar = React.createClass({
	displayName: 'SearchBar',


	getInitialState: function getInitialState() {
		return {
			value: ''
		};
	},

	getButton: function getButton() {
		if (this.state.value.length === 0) {
			return this.props.deafultButton;
		} else {
			return this.props.alternativeButton;
		}
	},

	onkeydown: function onkeydown(event) {
		if (event.keyCode === 13) {
			this.props.onClick();
		}
	},

	onChange: function onChange(event) {
		this.props.onChange(event);
		var value = event.target.value;

		this.setState({
			value: value
		});

		console.log(this.state.value);
	},

	render: function render() {

		return React.createElement(
			'div',
			{ className: 'search-bar' },
			React.createElement('input', { className: 'search-bar-input', onChange: this.onChange, onKeyDown: this.onkeydown }),
			this.getButton()
		);
	}
});

module.exports = SearchBar;