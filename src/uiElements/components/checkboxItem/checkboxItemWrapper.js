var React = require('react')
var CheckboxItemWrapper = React.createClass({

	propTypes: {
		onClick: React.PropTypes.func
	},

	getItems: function() {
		return (
			<button className="checkbox-item-clickable" onClick={this.props.onClick}>
				{this.props.children}
			</button>
		)
	},
 
	render: function() {
		return this.getItems();
	}

});

module.exports = CheckboxItemWrapper;