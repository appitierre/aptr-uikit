var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./components/container.jsx');
var Tags = require('./tags/app.jsx');

$(function() {
    ReactDOM.render(React.createElement(Container), $('.ui-elements')[0]);

    //ReactDOM.render(React.createElement(Tags), $('.tags')[0]);

})