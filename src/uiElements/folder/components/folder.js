var React = require('react');
var _ = require('underscore');
var classNames = require('classnames')

var Folder = React.createClass({

    getClassName: function() {
        return classNames('folder clearfix', this.props.folder.className);
    },

    onFolderClicked: function() {
        this.props.onClick(this.props.folder);
    },

    render: function() {
        return (
            <button className={this.getClassName()} onClick={this.onFolderClicked}>
                <div className="folder-icon">
                    <i className={"icon icon-" + this.props.icon} style={{color: this.props.folder._color}}></i>
                </div>
                <div className="folder-text">{this.props.folder.text}</div>
            </button>
        );
    }

});

module.exports = Folder;