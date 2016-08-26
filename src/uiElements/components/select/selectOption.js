var React = require('react');
var Button = require('../buttons/button');
var classNames = require('classnames'); 
var _ = require('underscore');

var DropDownOptions = React.createClass({

	propTypes: {
		options: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
		className: React.PropTypes.string
	},

	getInitialState: function() {
		return {
			isDisplayingList: false,
			value: this.props.value
		}
	},
	
	getItems: function() {
		if (this.state.isDisplayingList === true) {	
			return _.map(this.props.options, function(item, key){
				return (
					<div className="select-option-item" 
						key={item.index} 
						onClick={_.bind(function() {
							this.onButtonItemClicked(item._value);
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
		return classNames('select-option', this.props.className);
 	},

 	onButtonItemClicked: function(value) {
 		this.setState({
 			isDisplayingList: false,
			value: value
		});
 	},

	onSelectorClicked: function() {
		 var isDisplayingList = !this.state.isDisplayingList;
        
        this.setState({
            isDisplayingList: isDisplayingList
        });
	},

	render: function() {
		return (
			<div className={this.renderClassName()}>
				{this.getSelector()}
				<div className="select-option-item-container">	
					{this.getItems()}				
				</div>
			</div>
		);
	}

});

module.exports = DropDownOptions;