var React = require('react');

var SelectOption = React.createClass({

	getClassName: function() {
		if (this.props.className) {
			return 'select-option ' + this.props.className
		} else {
			return 'select-option'
		}
	},

	render: function() {
		return (
			<div className={this.getClassName()} onChange={this.props.onChange}>
				<select>
					<option value={this.props.valueOne}>
						{this.props.valueOne}
					</option>
					<option value={this.props.valueTwo}>
						{this.props.valueTwo}
					</option>
				</select>
			</div>
		);
	}

});

module.exports = SelectOption;