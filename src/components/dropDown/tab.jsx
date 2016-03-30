var React = require('react');
var Form = require('./../forms/form.jsx');

/* 
PROPS:
Title: 
ClassName:
tabSelected:
onClick:  
*/

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

	getButtonClassName: function() {
		return this.props.className + '-delete'
	},

	getIconClassName: function() {
		return 'icon icon-trash'
	},
 
	getIcon: function () {
		return (
			<i className={this.getIconClassName()}></i>
		)
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
				<div className={this.getHeaderClassName()} onClick={this.props.onClick}>
					<div className={this.getHeaderInnerClassName()}>
						{this.props.title}
						<button className={this.getButtonClassName()} onClick={this.props.onClick}>
							{this.getIcon()}
						</button>
					</div>		
				</div> 
				<div className={this.getItemInnerClassName()} style={this.getItemStyle()}>
				<Form title="Form 1 *" description="this is the item description" />
				</div>
			</div>
		);
	}

});

module.exports = tab;