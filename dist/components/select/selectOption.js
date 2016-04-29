'use strict';

var React = require('react');

var SelectOption = React.createClass({
	displayName: 'SelectOption',


	getClassName: function getClassName() {
		if (this.props.className) {
			return 'select-option ' + this.props.className;
		} else {
			return 'select-option';
		}
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: this.getClassName(), onChange: this.props.onChange },
			React.createElement(
				'select',
				null,
				React.createElement(
					'option',
					{ value: this.props.valueOne },
					this.props.valueOne
				),
				React.createElement(
					'option',
					{ value: this.props.valueTwo },
					this.props.valueTwo
				)
			)
		);
	}

});

module.exports = SelectOption;