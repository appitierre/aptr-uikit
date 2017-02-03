'use strict';

var React = require('react');
var classnames = require('classnames');

/*
Props
text: String
*/

var Chip = React.createClass({
    displayName: 'Chip',


    render: function render() {
        return React.createElement(
            'div',
            { className: 'chip' },
            this.props.text
        );
    }

});

module.exports = Chip;