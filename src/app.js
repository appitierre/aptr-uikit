var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./components/container.js');

$(function() {
    ReactDOM.render(React.createElement(Container), $('.ui-elements')[0]); 
})