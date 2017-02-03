var React = require('react');

var FormSortableItemHandle = React.createClass({

    render: function() {
        return (
            <span className="form-sortable-item-handle">
                <i className="icon icon-move"></i>
            </span>
        );
    }

});

module.exports = FormSortableItemHandle;