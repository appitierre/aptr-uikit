var React = require('react');
var Button = require('../../buttons/components/button');
var classNames = require('classnames'); 
var _ = require('lodash');
var clickOutside = require('react-onclickoutside');
var SelectOptionsItem = require('./selectOptionsItem');

var SelectOptions = React.createClass({


	getInitialState: function() {
		return {
			isOpen: false
		}
	},

	getDropDownText: function() {
        if (!this.props.value) {
            return this.props.initialText;
        }
        return _.find(this.props.options, {_value: this.props.value}).text;
    },

	getButtonIcon: function() {
		if (this.state.isOpen === false) {
			return 'chevron-up'
		} else {
			return 'chevron-down'
		}
	},

	handleClickOutside: function() {
        if (this.state.isOpen) {
            this.toggleDropDown();
        }
    },

	toggleDropDown: function() {
		var isOpen = !this.state.isOpen;
        
        this.setState({
            isOpen: isOpen
        });
	},

	getClassName: function() {
		return classNames('select-options', this.props.className);
 	},

	onDropDownClicked: function() {
		this.toggleDropDown();
	},

	onOptionClicked: function(value) {
		this.toggleDropDown();
        this.props.onChange(value);
	},

	renderOptions: function() {
        if (this.state.isOpen) {

            var options = _.map(this.props.options, (option, index) => {
                return (
                    <SelectOptionsItem
                        value={option._value}
                        text={option.text}
                        onClick={this.onOptionClicked}
                        key={index}
                    />
                );
            });

            var className = "select-options-list";

            if (this.props.iconPosition === "right") {
            	className = "select-options-list is-right-direction"
            }; 

            return (
                <div className={className}>
                    {options}
                </div>
            );
        }
    },

	render: function() {
		return (
			<div className={this.getClassName()}>
				<Button 
					type={this.props.type || "secondary"}
					text={this.getDropDownText()} 
					onClick={this.onDropDownClicked} 
					icon={this.getButtonIcon()} 
					iconPosition={this.props.iconPosition || 'left'}
				/>
				{this.renderOptions()}			
			</div>
		);
	}

});

module.exports = clickOutside(SelectOptions);