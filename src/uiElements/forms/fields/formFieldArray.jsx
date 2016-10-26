var React = require('react');
var registerType = require('../helpers').registerType;
var Form = require('../components/form.jsx');
var FormSortable = require('../components/formSortable.jsx');
var UIKIT = require('aptr-uikit');
var Button = UIKIT.Button;

var FormFieldArray = React.createClass({

    getInitialState: function() {
        return {
            selectedItemIndex: 0
        }
    },

    onSorted: function(items, data) {

        this.setState({
            selectedItemIndex: data.newIndex
        });

        return this.props.updateField(items);

    },

    onItemClicked: function(index) {
        
        this.setState({
            selectedItemIndex: index
        });

    },

    onAddClicked: function(event) {
        event.preventDefault();
        var items = this.props.value || [];
        var newItem = {itemIndex: items.length}
        items.push(newItem);
        
        return this.props.updateField(items).then(_.bind(function() {
            this.setState({
                selectedItemIndex: items.length - 1
            });
        }, this));
    },

    onOptionItemUpdated: function(attributes, hasError, fieldKey) {
        var items = this.props.value || [];

        _.extend(items[this.state.selectedItemIndex], attributes);

        return this.props.updateField(items);
    },

    onDeleteItemClicked: function() {
        this.props.value.splice(this.state.selectedItemIndex, 1);
        // Once removing one - update the itemIndex
        _.each(this.props.value, function(item, index) {
            item.itemIndex = index;
        })

        this.setState({
            selectedItemIndex: this.state.selectedItemIndex - 1
        });
        return this.props.updateField(this.props.value);
    },

    renderItemForm: function() {
        var value = this.props.value || [];

        var selectedItemModel = value[this.state.selectedItemIndex];

        if (!selectedItemModel) {
            return null;
        }

        return (
            <div>
                <Form 
                    key={selectedItemModel._id}
                    model={selectedItemModel}
                    schema={this.props.subSchema}
                    onUpdate={this.onOptionItemUpdated}
                    form={_.assign({}, this.props.form || {}, {
                        selectedItemModel: selectedItemModel
                    })}
                />
                {this.renderDeleteButton()}
            </div>
        );

    },

    renderDeleteButton: function() {
        return (
            <div>
                <Button
                    onClick={this.onDeleteItemClicked}
                    text={this.props.deleteButtonText}
                    icon="trash"
                    type="alert"
                />
            </div>
        );
    },

    render: function() {

        return (

            <div className="form-field form-field-array clearfix">
                
                <div className="form-field-array-items">

                    <div className="form-field-label">
                        {this.props.label}
                    </div>

                    <div className="form-field-help">
                        {this.props.help}
                    </div>

                    <FormSortable 
                        items={this.props.value || []}
                        itemTextAttribute={this.props.itemTextAttribute || "label"}
                        defaultPrefix={this.props.defaultPrefix || "Item"}
                        selectedItemIndex={this.state.selectedItemIndex}
                        onSort={this.onSorted}
                        onClick={this.onItemClicked}
                    />

                    <div>
                        <Button
                            type="primary"
                            onClick={this.onAddClicked}
                            text={this.props.addButtonText}
                        />
                    </div>
                </div>
                
                <div className="form-field-array-item-form">
                    {this.renderItemForm()}
                </div>

            </div>

        );

    }

});

registerType('Array', FormFieldArray);

module.exports = FormFieldArray;