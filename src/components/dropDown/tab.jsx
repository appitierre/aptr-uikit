var React = require('react');
var Form = require('./../forms/form.jsx');

var tab = React.createClass({

	getHeaderClassName: function() {	
		return this.props.className + '-header'
	},

	getHeaderInnerClassName: function() {
		if (this.props.title) {
			return this.props.className + '-header-inner'
		}
	},

	getItemInnerClassName: function() {
		return this.props.className + '-inner'
	},

	getItemStyle: function() {
		if (this.props.tabSelected === false) {
			return {
				display: 'none'
			}
		} else {
			return {
				display: 'block'
			}
		}
	},

	render: function() {
		return (
			<div className={this.props.className}>
				<div className={this.getHeaderClassName()}>
					<div className={this.getHeaderInnerClassName()}>
						{this.props.title}
					</div>		
				</div> 
				<div className={this.getItemInnerClassName()} style={this.getItemStyle()}>
				<Form title="Form 1 *" />
				</div>
			</div>
		);
	}

});

module.exports = tab;