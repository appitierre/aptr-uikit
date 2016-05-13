var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./container.js');
var _ = require('lodash');

_.defer(function() {
    ReactDOM.render(React.createElement(Container), document.getElementsByClassName('ui-elements')[0]); 
})