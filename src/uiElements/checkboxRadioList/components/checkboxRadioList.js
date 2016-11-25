var React = require('react');
var CheckboxRadioListItem = require('./checkboxRadioListItem');

var CheckboxRadioList = React.createClass({

	getItems: function() {
		return _.map(this.props.items, (item, index) => {
			return (
				<CheckboxRadioListItem
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

module.exports = CheckboxRadioList;