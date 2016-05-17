'use strict';

var React = require('react');
var Button = require('../buttons/button');

var SearchBar = React.createClass({
	displayName: 'SearchBar',


	getInitialState: function getInitialState() {
		return {
			value: ''
		};
	},

	getButton: function getButton() {
		if (this.state.value.length === 0) {
			return React.createElement(Button, { icon: 'magnifier', className: 'search-bar-button' });
		} else {
			return React.createElement(Button, { icon: 'cross-circle', className: 'primary search-bar-button', onClick: this.onButtonClicked });
		}
	},

	// onkeydown: function(event) {
	// 	if (event.keyCode === 13) {
	// 	console.log('13')
	// 		this.props.onClick();
	// 	} else {
	// 		console.log('no')
	// 	}

	// 	console.log('r')
	// },

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
			{ className: 'search-bar' },
			React.createElement('input', { className: 'search-bar-input', value: this.state.value, onChange: this.onChange }),
			this.getButton()
		);
	}
});

module.exports = SearchBar;