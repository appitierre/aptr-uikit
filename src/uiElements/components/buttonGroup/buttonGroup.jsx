var React = require('react');
var Button = require('../buttons/button');
var _ = require('underscore');

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
		var className = 'button-group-toggle';

		if (this.props.className) {
			className += ' ' + this.props.className;
		}

		return className;

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
				/>
			)
		}, this)
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
				{this.getButtons()}
			</div>
		);
	}

});

module.exports = ButtonGroup;