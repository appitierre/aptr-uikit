var React = require('react');
var _ = require('lodash');
var Sortable = require('react-sortable-hoc');
var SortableElement = Sortable.SortableElement;
var FormSortableItem = SortableElement(require('./formSortableItem.js'));


var FormSortableContainer = React.createClass({

    getItems: function() {
        return _.map(this.props.items, (item, index) => {
            var isSelected = false;
            if (this.props.selectedItemIndex === index) {
                isSelected = true;
            }
            return (
                <FormSortableItem 
                    key={'item-' + index} 
                    index={index}
                    sortIndex={index} 
                    item={item}
                    itemTextAttribute={this.props.itemTextAttribute}
                    defaultPrefix={this.props.defaultPrefix}
                    onClick={this.props.onClick}
                    isSelected={isSelected}/>
            );
        });
    },

    render: function() {
        return (
            <ul className="form-sortable">
                {this.getItems()}
            </ul>
        );
    }

});

module.exports = FormSortableContainer;