var React = require('react');

var Button = React.createClass({

    render: function() {
        return (
            <button disabled={this.props.disabled} className="button primary">
                <i className="icon icon-star"></i>
                {this.props.text}
            </button>
        );
    }

});

module.exports = Button;