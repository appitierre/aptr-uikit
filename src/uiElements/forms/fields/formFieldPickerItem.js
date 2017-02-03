var React = require('react');

var FormFieldPickerItem = React.createClass({

    onClick: function(event) {
        event.preventDefault();
        this.props.onItemSelected(this.props.item.value)
    },

    render: function() {
        return (
            <button className="form-field-picker-item" onClick={this.onClick}>
                <div className="form-field-picker-image">
                    <img src={this.props.item.image}/>
                </div>
                <div className="form-field-picker-text">
                    {this.props.item.text}
                </div>
            </button>
        );
    }

});

module.exports = FormFieldPickerItem;