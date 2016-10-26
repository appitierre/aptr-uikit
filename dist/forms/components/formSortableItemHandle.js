"use strict";

var React = require('react');

var FormSortableItemHandle = React.createClass({
    displayName: "FormSortableItemHandle",


    render: function render() {
        return React.createElement(
            "span",
            { className: "form-sortable-item-handle" },
            React.createElement("i", { className: "icon icon-move" })
        );
    }

});

module.exports = FormSortableItemHandle;