'use strict';

var React = require('react');

var Login = React.createClass({
	displayName: 'Login',


	render: function render() {
		console.log('login woo');
		return React.createElement('div', { className: 'login' });
	}

});

module.exports = Login;