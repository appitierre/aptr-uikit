var React = require('react');
var Button = require('../../buttons/components/button');

var AccordionItem = React.createClass({


	getTitle: function() {
	 
		return (
			<Button 
				className="accordion-item-title"
				text={this.props.item.title}
				icon={this.props.icon}
				onClick={this.onClick}
				type="primary full-width"
			/>
		)
	},

	getBody: function() {
		if (this.props.item._isSelected === true) {
			return (
				<div className="accordion-body">
					{this.props.item.body}
				</div>
			);
		}
	},

	onClick: function() {
		this.props.onChange(this.props.item);
	},

	render: function() {
		return (
			<div className="accordion-item">
				{this.getTitle()}
				{this.getBody()}
			</div>
		);
	}

});

module.exports = AccordionItem;