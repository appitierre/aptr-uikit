var React = require('react');
var Sortable = require('react-sortable-hoc');
var SortableContainer = Sortable.SortableContainer;
var SortableElement = Sortable.SortableElement;
var arrayMove = Sortable.arrayMove;
var FormSortableContainer = SortableContainer(require('./formSortableContainer.js'));

var FormSortable = React.createClass({

    getInitialState: function() {
        return {
            items: this.props.items
        }
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState({
            items: nextProps.items
        })
    },

    onSortEnd: function(data) {
        var items = arrayMove(this.state.items, data.oldIndex, data.newIndex);
        this.setState({
            items: _.map(items, (item, index) => _.assign({}, item, { itemIndex: index }))
        }, function() {
            this.props.onSort(this.state.items, data);
        })
    },

    render: function() {
        return (
            <FormSortableContainer
                onSortEnd={this.onSortEnd}
                onSortMove={this.onSortMove}
                onClick={this.props.onClick}
                items={this.state.items}
                itemTextAttribute={this.props.itemTextAttribute}
                defaultPrefix={this.props.defaultPrefix}
                helperClass="form-sortable-helper"
                useDragHandle={true}
                selectedItemIndex={this.props.selectedItemIndex}
            />
        );
    }

});

module.exports = SortableContainer(FormSortable);