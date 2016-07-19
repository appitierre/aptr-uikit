var React = require('react');

var DropDownItem = React.createClass({

	render: function() {
		return (
			<button onClick={this.props.closeDropDown}>
				{this.props.item.title}
			</button>
		);
	}

});

module.exports = DropDownItem;