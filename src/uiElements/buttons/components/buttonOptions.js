var React = require('react');
var Button = require('./button');
var ButtonOptionItem = require('./buttonOptionItem');

var ButtonOptions = React.createClass({

	getInitialState: function() {
		return {
			isOpen: false
		}
	},

	toggleDropDown: function() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	},

	renderComponent: function() {
		return (
			<Button
				className="button-options-button" 
				type={this.props.type}
				onClick={this.props.onClick}
				text={this.props.text}
				isSmall={this.props.isSmall} 
			/>
		);
	},

	renderOptionButton: function() {
		var icon = "chevron-down";

		if (this.props.optionsPosition === "top") {
			icon = "chevron-up"
		};

		return (
			<Button
				className="button-options-selector"
				icon={icon}
				onClick={this.onOptionButtonClicked}
				type={this.props.type}
				isSmall={this.props.isSmall}
			/>
		)
	},

	renderOptions: function() {
		if (this.state.isOpen) {
			var options = _.map(this.props.options, (option, index) => {
				return (
					<ButtonOptionItem 
						text={option.title}
						body={option.body}
						key={index}
						value={option.value}
						onClick={this.onOptionClicked}
					/>
				)
			});

			return (
				<div className="button-options-list">
					{options}
				</div>
			);
		};
	},

	onOptionClicked: function(value) {
		this.toggleDropDown();
		this.props.onChange(value);
	},

	onOptionButtonClicked: function() {
		this.toggleDropDown();
	},

	render: function() {	
		return (
			<div className="button-options">
				{this.renderComponent()}
				{this.renderOptionButton()}
				{this.renderOptions()}
			</div>
		);
	}

});

module.exports = ButtonOptions;