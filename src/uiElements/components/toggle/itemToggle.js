var React = require('react');
var classNames = require('classnames');

var ItemToggle = React.createClass({

	propTypes: {
		toggleId: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.number,
		]).isRequired,
		onChange: React.PropTypes.func.isRequired,
		className: React.PropTypes.string
	},

	renderClassName: function() {
		return classNames('forms-boolean-toggle', this.props.className);
	},

	onChange: function(event) {
		var checked = event.target.checked;
		this.props.onChange(checked);
	},

	render: function() {
		return (
			<div>
				<input type="checkbox" id={this.props.toggleId} className="forms-boolean-toggle" defaultChecked={this.props.initialValue} onChange={this.onChange}/>
				<label htmlFor={this.props.toggleId} />
			</div>
		);
	}

});

module.exports = ItemToggle;