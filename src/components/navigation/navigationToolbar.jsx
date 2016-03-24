var React = require('react');

var NavigationToolbar = React.createClass({

	getSelectedClass: function() {
		if (this.props.isSelected === true) {
			return ' selected'
		} else {
			return null
		}
	},

	render: function() {	
		return (
			<div className={this.props.className}>
				<a href={this.props.href} className={this.getSelectedClass()} onClick={this.props.onClick}>
					{this.props.item}
				</a>
			</div>
		);
	}

});

module.exports = NavigationToolbar;