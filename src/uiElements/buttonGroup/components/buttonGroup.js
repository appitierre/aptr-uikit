var React = require('react');
var Button = require('../../buttons/components/button');
var ClassNames = require('classnames')
var _ = require('lodash');

var ButtonGroup = React.createClass({

	getInitialState: function() {
		return {
			_value: this.props.value
		}
	},

	componentWillMount: function() {
		if (!this.props.buttonType) {
			console.warn("You're currently missing a buttonType prop on a Button Group");
		}

		if (!this.props.value) {
			console.warn("You're currently missing a value prop on a Button Group");
		}

		if (!this.props.onChange) {
			console.warn("You're currently missing a onChange prop on a Button Group");
		}
	},

	getClassName: function() {
		if (this.props.isSmall) {
			return ClassNames('button-group-toggle', this.props.className, 'is-small')
		}

		return ClassNames('button-group-toggle', this.props.className);
	},

	getButtons: function() {
		return _.map(this.props.buttons, (item, index) => {
			var className = '';
			// Adds buttonType class to selected button item
			if (item._value === this.state._value) {
				className = this.props.buttonType;
			}

			return (
				<Button 
					onClick={_.bind(function() {
						this.onButtonItemClicked(item._value);
					}, this)}
					key={index} 
					className={className} 
					icon={item._icon}
					toolTip={item.toolTip}
					toolTipPosition={item.toolTipPosition}
					isSmall={this.props.isSmall}
				/>
			)		
		})
	},

	getButtonToggle: function() {
		var className = this.props.buttonType;
		// Adds buttonType class to selected button item
		var item = _.find(this.props.buttons, (button) => {
			if (button._value != this.state._value) {
				return button;
			}
		});

		return (
			<Button 
				onClick={_.bind(function() {
					var nextItem = _.find(this.props.buttons, {_value: item._value});
					this.onButtonItemClicked(nextItem._value);
				}, this)} 
				className={className} 
				icon={item._icon}
				toolTip={item.toolTip}
				toolTipPosition={item.toolTipPosition}
				isSmall={this.props.isSmall}
			/> 
		)
	},

	getButtonItems: function() {
		if (this.props.buttons.length === 2 && this.props.shouldUseToggle) {
			return this.getButtonToggle();
		} else {
			return this.getButtons();
		}
	},

	onButtonItemClicked: function(value) {
		
		this.setState({
			_value: value
		});

		this.props.onChange(value); 

	},

	render: function() {
		return (
			<div className={this.getClassName()}>
				{this.getButtonItems()}
			</div>
		);
	}

});

module.exports = ButtonGroup;