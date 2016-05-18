'use strict';

var React = require('react');

var PlayButton = React.createClass({
  displayName: 'PlayButton',


  getButtonClassName: function getButtonClassName() {
    var className = 'button button-play';
    if (this.props.type) {
      className += " " + this.props.type;
    }
    if (this.props.className) {
      className += " " + this.props.className;
    }
    return className;
  },

  render: function render() {
    console.log('play button rendered');
    return React.createElement(
      'button',
      { onClick: this.props.onClick, className: this.getButtonClassName() },
      React.createElement('i', { className: 'icon icon-play-circle' })
    );
  }

});

module.exports = PlayButton;