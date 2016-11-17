var React = require('react');
var AccordionItem = require('./accordionItem');

var Accordion = React.createClass({

	getComponents: function() {

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
				/>
			);
		});
	},

	render: function() {
		return (
			<div className="accordion">
				{this.getComponents()}
			</div>
		);
	}

});

module.exports = Accordion;