var React = require('react');
var AccordionItem = require('./accordionItem');

var Accordion = React.createClass({

	getComponents: function() {
		return _.map(this.props.items, (item, index) => {
			return (
				<AccordionItem 
					item={item}
					id={index}
					icon={this.props.icon}
					onChange={this.props.onChange}
				/>
			);
		});
	},

	render: function() {
		return (
			<div className="accordion-widget component-widget">
				{this.getComponents()}
			</div>
		);
	}

});

module.exports = Accordion;