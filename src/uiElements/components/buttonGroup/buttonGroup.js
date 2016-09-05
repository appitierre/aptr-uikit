var React = require('react');
var Button = require('../buttons/button');
var ClassNames = require('classnames')
var _ = require('underscore');

var ButtonGroup = React.createClass({

	getInitialState: function() {
		return {
			_value: this.props.value
		}
	},

	propTypes: {
		buttonType: React.PropTypes.string.isRequired,
		value: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func.isRequired,
		buttons: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
		shouldUseToggle: React.PropTypes.bool
	},

	getClassName: function() {
		return ClassNames('button-group-toggle', this.props.className);
	},

	getButtons: function() {
		return _.map(this.props.buttons, function(item, index) {
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
				/>
			)		
		}, this)
	},

	getButtonToggle: function() {
		var className = this.props.buttonType;
		// Adds buttonType class to selected button item
		var item = _.find(this.props.buttons, function(button) {
			if (button._value != this.state._value) {
				return button;
			}
		}, this);

		return (
			<Button 
				onClick={_.bind(function() {
					var nextItem = _.findWhere(this.props.buttons, {_value: item._value});
					this.onButtonItemClicked(nextItem._value);
				}, this)} 
				className={className} 
				icon={item._icon}
				toolTip={item.toolTip}
				toolTipPosition={item.toolTipPosition}
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