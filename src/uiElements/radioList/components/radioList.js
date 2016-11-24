var React = require('react');
var RadioListItem = require('./radioListItem');

var RadioList = React.createClass({

	getItems: function() {
		return _.map(this.props.items, (item, index) => {
			return (
				<RadioListItem
					type={this.props.type}
					item={item}
					key={index}
					onChange={this.props.onChange}
				/>
			); 
		});
	},

	render: function() {
		return (
			<div className="radio-list">
				{this.getItems()}
			</div>
		);
	}

});

module.exports = RadioList;