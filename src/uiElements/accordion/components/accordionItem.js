var React = require('react');
var Button = require('../../buttons/components/button');

var AccordionItem = React.createClass({


	getTitle: function() {
		var icon = this.props.icon;

		if (this.props.item._isSelected) {
			icon = this.props.iconSelected;
		};

		return (
			<Button 
				className="accordion-item-title"
				text={this.props.item.title}
				icon={icon}
				onClick={this.onClick}
				type="primary full-width"
			/>
		)
	},

	getBody: function() {
		if (this.props.item._isSelected === true) {
			return (
				<div className="accordion-item-body">
					<div className="accordion-item-body-inner">
						{this.props.item.body}
					</div>
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