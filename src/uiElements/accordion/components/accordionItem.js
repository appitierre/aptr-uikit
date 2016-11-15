var React = require('react');
var Button = require('../../buttons/components/button');

var AccordionItem = React.createClass({

	getInitialState: function() {
		return {
			isDisplaying: false
		}
	},

	onClick: function() {
		this.props.onChange(this.props.id);
		
		if (this.props.id === this.props.currentlySelectedItem || this.props.currentlySelectedItem === null) {
			this.setState({
				isDisplaying: true
			});
			console.log("matching", this.props.id, this.state.isDisplaying);
		} else if (this.props.id != this.props.currentlySelectedItem) {
			this.setState({
				isDisplaying: false
			})
			console.log("not matching", this.props.id, this.state)
		}  
	},

	getBody: function() {
		if (this.props.id === this.props.currentlySelectedItem) {
			if (this.state.isDisplaying === true) {
				return (
					<div>
						{this.props.body}
					</div>
				);
			}
		};
	},

	getTitle: function() {
	var icon = this.props.icon;

	if (this.state.isDisplaying === true) {
		if (this.props.iconSelected) {
			icon = this.props.iconSelected;
		}
	} 
		return (
			<Button 
				className="accordion-item-title-inner component-item-title-inner"
				text={this.props.title}
				icon={icon}
				onClick={this.onClick}
				type="secondary full-width"
			/>
		)
	},

	render: function() {
		return (
			<div className="accordion-item component-item">
				{this.getTitle()}
				{this.getBody()}
			</div>
		);
	}

});

module.exports = AccordionItem;