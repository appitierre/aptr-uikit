var React = require('react');
var classNames = require('classnames');

var ItemToggle = React.createClass({

	renderClassName: function() {
		return classNames('forms-boolean-toggle', this.props.className);
	},

	onClick: function(value) {
		this.props.onChange(value)	
	},

	render: function() {
		return (
			<div>
				<input type="checkbox" id="man" className="forms-boolean-toggle" onClick={this.onClick}/>
				<label htmlFor="man" />
			</div>
		);
	}

});

module.exports = ItemToggle;