var React = require('react');
var AccordionItem = require('./accordionItem');

var Accordion = React.createClass({

	getComponents: function() {
		return _.map(this.props.items, (item, index) => {
			return (
				<AccordionItem 
					title={item.title}
					body={item.body}
					icon={item.icon}
					iconSelected={item.iconSelected}
					id={index}
					onChange={this.props.onChange}
					currentlySelectedItem={this.props.currentlySelectedItem}
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