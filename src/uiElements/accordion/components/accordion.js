var React = require('react');
var AccordionItem = require('./accordionItem');

var Accordion = React.createClass({

	getItems: function() {

		return _.map(this.props.items, (item, index) => {
			var iconSelected = this.props.icon;

			if (this.props.iconSelected) {
				iconSelected = this.props.iconSelected
			};
			
			return (
				<AccordionItem 
					item={item}
					id={index}
					icon={this.props.icon}
					iconSelected={iconSelected}
					onChange={this.props.onChange}
					key={item._id}
				/>
			);
		});
	},

	render: function() {
		return (
			<div className="accordion">
				{this.getItems()}
			</div>
		);
	}

});

module.exports = Accordion;