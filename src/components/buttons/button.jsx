var React = require('react');

var Button = React.createClass({

    getButtonClassName: function() {
        var className = 'button';
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return className;
    },

    getIconClassName: function() {
        return 'icon icon-' + this.props.icon;
    }, 

    render: function() {
        return (
            <button disabled={this.props.disabled} className={this.getButtonClassName()} onClick={this.props.onClick}>
                <i className={this.getIconClassName()} ></i>
                {this.props.text}
            </button>
        );
    }

});

module.exports = Button;