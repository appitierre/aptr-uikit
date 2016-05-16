var React = require('react');
var _ = require('underscore');

var Folder = React.createClass({

    getClassName: function() {
        var className = 'folder clearfix';
        if (this.props.className) {
            className += ' ' + this.props.className;
        }
        return className;
    },

    onFolderClicked: function() {
        this.props.onClick(this.props.folder);
    },

    render: function() {
        return (
            <button className={this.getClassName()} onClick={this.onFolderClicked}>
                <div className="folder-icon">
                    <i className={"icon icon-" + this.props.icon} style={{color: this.props.color}}></i>
                </div>
                <div className="folder-text">{this.props.text}</div>
            </button>
        );
    }

});

module.exports = Folder;