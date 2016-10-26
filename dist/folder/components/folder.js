'use strict';

var React = require('react');
var classNames = require('classnames');

var Folder = React.createClass({
    displayName: 'Folder',


    getClassName: function getClassName() {
        return classNames('folder clearfix', this.props.folder.className);
    },

    onFolderClicked: function onFolderClicked() {
        this.props.onClick(this.props.folder);
    },

    render: function render() {
        return React.createElement(
            'button',
            { className: this.getClassName(), onClick: this.onFolderClicked },
            React.createElement(
                'div',
                { className: 'folder-icon' },
                React.createElement('i', { className: "icon icon-" + this.props.icon, style: { color: this.props.folder._color } })
            ),
            React.createElement(
                'div',
                { className: 'folder-text' },
                this.props.folder.text
            )
        );
    }

});

module.exports = Folder;