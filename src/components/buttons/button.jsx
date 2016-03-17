var React = require('react');

var Button = React.createClass({

    getClassName: function() {
        var className = 'button';
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return className;
    },

    render: function() {
        return (
            <button disabled={this.props.disabled} className={this.getClassName()}>
                <i className="icon icon-star"></i>
                {this.props.text}
            </button>
        );
    }

});

module.exports = Button;