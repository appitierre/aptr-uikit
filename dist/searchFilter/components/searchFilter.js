'use strict';

var React = require('react');
var SelectOptions = require('../../selectOptions/components/selectOptions');

var SearchFilter = React.createClass({
    displayName: 'SearchFilter',


    componentDidUpdate: function componentDidUpdate(prevProps) {
        if (prevProps.shouldFocusInput != this.props.shouldFocusInput && this.props.shouldFocusInput) {
            this.refs.searchInput.focus();
        }
    },

    onChange: function onChange(event) {
        this.props.onChange(event.target.value);
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'search-filter' },
            React.createElement(SelectOptions, {
                options: this.props.filters,
                onChange: this.props.onFilterChanged,
                value: this.props.filter,
                className: 'search-filter-options'
            }),
            React.createElement('input', {
                className: 'search-filter-input',
                ref: 'searchInput',
                placeholder: this.props.placeholder,
                onChange: this.onChange,
                value: this.props.value,
                autoFocus: this.props.shouldFocusInput
            })
        );
    }

});

module.exports = SearchFilter;