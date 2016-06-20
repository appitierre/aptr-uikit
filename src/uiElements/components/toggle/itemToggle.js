var React = require('react');
var classNames = require('classnames');

var ItemToggle = React.createClass({

	getInitialState: function() {
		return {
			value: this.props.initialValue
		}
	},

	renderClassName: function() {
		return classNames('forms-boolean-toggle', this.props.className);
	},

	onClick: function(event) {
		this.props.onChange(event);
	},

	render: function() {
		return (
			<div>
				<input type="checkbox" id={this.props.toggleId} className="forms-boolean-toggle" defaultChecked={this.state.value} onClick={this.onClick}/>
				<label htmlFor={this.props.toggleId} />
			</div>
		);
	}

});

module.exports = ItemToggle;