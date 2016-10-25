var React = require('react');
var DropDownItem = require('./dropDownItem_example');
var items = [{
	title: 'One'
}, {
	title: 'Two'
}, {
	title: 'Three'
}]

var DropDownItems = React.createClass({

	getItems: function() {
		return _.map(items, (item, index) => {
			return (
				<DropDownItem
					key={index}
					closeDropDown={this.props.closeDropDown}
					item={item}
				/>
			);
		});
	},

	render: function() {
		return (
			<div>
				{this.getItems()}
			</div>
		);
	}

});

module.exports = DropDownItems;