'use strict';

var React = require('react');
var classnames = require('classnames');
var FlatButton = require('../../buttons/components/flatButton');

/*
Props
items: {
    icon: String,
    label: String,
    component: ReactComponent
}
value: String - Selected label
onChange: Function - passes back the changed value/label
*/

var Tabs = React.createClass({
    displayName: 'Tabs',


    getLabels: function getLabels() {
        var _this = this;

        return _.map(this.props.items, function (item) {

            var className = classnames('tabs-label', {
                'selected': _this.props.value === item.value
            });

            return React.createElement(FlatButton, {
                key: item.label,
                className: className,
                onClick: function onClick(event) {
                    event.preventDefault();
                    _this.props.onChange(item.value);
                },
                text: item.label,
                icon: item.icon
            });
        });
    },

    getContent: function getContent() {
        if (!this.props.value) {
            console.warn('A value needs to be passed into a tabs component');
        } else {
            return _.find(this.props.items, { value: this.props.value }).component;
        }
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'tabs' },
            React.createElement(
                'div',
                { className: 'tabs-labels' },
                React.createElement(
                    'div',
                    { className: 'tabs-labels-inner' },
                    this.getLabels()
                )
            ),
            React.createElement(
                'div',
                { className: 'tabs-contents' },
                this.getContent()
            )
        );
    }

});

module.exports = Tabs;