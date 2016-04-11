var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./components/container.jsx');
var Tags = require('./tags/app.jsx');
var ArticleNavigation = require('./article-navigation-hover/container.jsx');

$(function() {
    ReactDOM.render(React.createElement(Container), $('.ui-elements')[0]);

    //ReactDOM.render(React.createElement(Tags), $('.tags')[0]);

    //ReactDOM.render(React.createElement(ArticleNavigation), $('.article-navigation-hover')[0]);






})