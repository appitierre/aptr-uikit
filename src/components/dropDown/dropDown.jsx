var React = require('react');

/* 
PROPS:
FirstValue:
FirstOption: 
SecondValue:
SecondOption: 
*/

var DropDown = React.createClass({

	render: function() {
		return (
			<div>
				<select>
					<option value={this.props.firstValue}>{this.props.firstOption}</option>
					<option value={this.props.secondValue}>{this.props.secondOption}</option>
				</select>
			</div>
		);
	}

});

module.exports = DropDown;