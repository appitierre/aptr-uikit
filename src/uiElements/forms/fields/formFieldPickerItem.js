var React = require('react');

var FormFieldPickerItem = React.createClass({

    onClick: function(event) {
        event.preventDefault();
        this.props.onItemSelected(this.props.item.value)
    },

    renderImage: function() {
        if (this.props.item.image) {
            return (
                <div className="form-field-picker-image">
                    <img src={this.props.item.image}/>
                </div>
            );
        }
    },

    render: function() {
        return (
            <button className="form-field-picker-item" onClick={this.onClick}>
                {this.renderImage()}
                <div className="form-field-picker-text">
                    {this.props.item.text}
                </div>
            </button>
        );
    }

});

module.exports = FormFieldPickerItem;