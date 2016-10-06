var React = require('react');
var Button = require('../buttons/button');
var SearchBar = require('../search/searchBar');
var classNames = require('classnames'); 
var _ = require('underscore');

var SelectOption = React.createClass({


	getInitialState: function() {
		return {
			isDisplayingList: false,
			value: this.props.initialText
		}
	},
	
	getItems: function() {
		if (this.state.isDisplayingList === true) {	
			return _.map(this.props.options, function(item, key){
				return (
					<div className="select-option-item" 
						key={item.index} 
						onClick={_.bind(function() {
							this.onButtonItemClicked(item);
						}, this)}>
						{item.text}
					</div>
				)
			}, this)
		}
	},

	getButtonIcon: function() {
		if (this.state.isDisplayingList === false) {
			return 'chevron-down'
		} else {
			return 'chevron-up'
		}
	},

	getSelector: function() {
		return (
			<div className="select-option-selector">
				<Button type="secondary" text={this.state.value} onClick={this.onSelectorClicked} icon={this.getButtonIcon()} iconPosition='right' />
			</div> 
		)
	},

	renderClassName: function() {
		return classNames('select-option', this.props.className, {
			"search": this.props.options.length >= 6
		});
 	},

 	renderSearchBar: function() {
 		var length = this.props.options.length;

 		if (length >= 6) {
 			if (this.state.isDisplayingList) {
	 			return (
	 				<div className="search-bar-inner">
	 					<SearchBar isSmall={true} onChange={this.onSearchChanged}/>
	 				</div> 
	 			)
	 		}
 		}
 	},

 	onSearchChanged: function(text) {
 		
 		this.props.onSearchChange(text);
 	},

 	onButtonItemClicked: function(item) {
 		this.setState({
 			isDisplayingList: false,
			value: item.text
		});

		this.props.onChange(item._value);
 	},

	onSelectorClicked: function() {
		var isDisplayingList = !this.state.isDisplayingList;
        
        this.setState({
            isDisplayingList: isDisplayingList
        });
	},

	render: function() {
	console.log(this.state.value);
		return (
			<div className={this.renderClassName()}>
				{this.getSelector()}
				{this.renderSearchBar()}
				<div className="select-option-item-container">	
					{this.getItems()}				
				</div>
			</div>
		);
	}

});

module.exports = SelectOption;