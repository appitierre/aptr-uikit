var React = require('react');

var FormFieldSelectOption = React.createClass({

    render: function() {
        return (
            <option value={this.props.option.value}>
                {this.props.option.text}
            </option>
        );
    }

});

module.exports = FormFieldSelectOption;