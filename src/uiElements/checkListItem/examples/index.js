var React = require('react');
var Section = require('section');
var CheckListItem = require('../components/checkListItem');

var index = React.createClass({

	getInitialState: function() {
		return {
			isChecked: false
		}
	},

	getComponents: function() {
		return [
			<CheckListItem 
				isChecked={this.state.isChecked}
				onCheck={this.onCheck}>
				<div>
					Check List Item
				</div>
			</CheckListItem>
		]
	},

	onCheck: function(checked) {
		var isChecked = "no";

		if (checked === true) {
			isChecked = "yes"
		}

		console.log("Is this item checked?", isChecked);

		this.setState({
			isChecked: checked
		});
	},

	render: function() {
		return (
			<div>
				<Section
					title="Check List Item"
					components={this.getComponents()}
					shouldDisplayAsBlock={true}
				/>
			</div>
		);
	}

});

module.exports = index;