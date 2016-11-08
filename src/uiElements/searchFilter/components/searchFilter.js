var React = require('react');
var SelectOptions = require('../../selectOptions/components/selectOptions');

var SearchFilter = React.createClass({

    componentDidUpdate: function(prevProps) {
        if (prevProps.shouldFocusInput != this.props.shouldFocusInput && this.props.shouldFocusInput) {
            this.refs.searchInput.focus();
        }
    },

    onChange: function(event) {
        this.props.onChange(event.target.value);
    },

    render: function() {
        return (
            <div className="search-filter">
                <SelectOptions
                    options={this.props.filters}
                    onChange={this.props.onFilterChanged}
                    value={this.props.filter}
                    className="search-filter-options"
                />
                <input 
                    className="search-filter-input"
                    ref="searchInput"
                    placeholder={this.props.placeholder}
                    onChange={this.onChange}
                    value={this.props.value}
                    autoFocus={this.props.shouldFocusInput}
                />
            </div>
        );
    }

});

module.exports = SearchFilter;