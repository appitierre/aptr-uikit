var React = require('react');
var classnames = require('classnames');

/*
Props
text: String
*/

var Chip = React.createClass({

    render: function() {
        return (
            <div className="chip">
                {this.props.text}
            </div>
        );
    }

});

module.exports = Chip;