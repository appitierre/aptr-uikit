var React = require('react');
var Sortable = require('react-sortable-hoc');
var SortableHandle = Sortable.SortableHandle;
var FormSortableItemHandle = SortableHandle(require('./formSortableItemHandle.jsx'));
var classnames = require('classnames');

var FormSortableItem = React.createClass({

    getClassName: function() {
        return classnames('form-sortable-item', {
            'is-selected': this.props.isSelected
        })
    },

    getItemText: function() {
        if (this.props.itemTextAttribute) {
            if (this.props.item[this.props.itemTextAttribute]) {
                return this.props.item[this.props.itemTextAttribute];
            } else {
                return this.props.defaultPrefix + " " + (this.props.index + 1)
            }
        } else {
            console.warn("Sortable items need a itemTextAttribute to display text. This is the attribute you would like the item to use to display the text.")
        }
    },

    onClick: function(event) {
        event.preventDefault();
        this.props.onClick(this.props.index);
    },

    render: function() {
        return (
            <li className={this.getClassName()}>
                <div className="form-sortable-item-inner">
                    <FormSortableItemHandle/>
                    <div className="form-sortable-item-text" onClick={this.onClick}>
                        {this.getItemText()}
                    </div>
                </div>
            </li>
        );
    }

});

module.exports = FormSortableItem;