var React = require('react');

var Button = React.createClass({

    getButtonClassName: function() {
        var className = 'button';
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return className;
    },

    getIconPositionClassName: function(position) {
        return position + ' icon icon-' + this.props.icon;
    },

    getIconClassName: function() {
        return ' icon icon-' + this.props.icon;
    },

    getIcon: function(position) {
        if (this.props.icon && this.props.iconPosition === position) {
            return (
                <i className={this.getIconPositionClassName(position)}> </i>
            );
        } 
    },

    getIconDefault: function() {
        if (!this.props.iconPosition) {
            return (
                <i className={this.getIconClassName()}> </i> 
            )
        }
    },

    render: function() {
        return (
            <button disabled={this.props.disabled} className={this.getButtonClassName()} onClick={this.props.onClick}>
                {this.getIcon('left')}
                {this.getIconDefault()}
                {this.props.text}
                {this.getIcon('right')}
            </button>
        );
    }

});

module.exports = Button;