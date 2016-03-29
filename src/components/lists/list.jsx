var React = require('react');

/* 
PROPS:
Title: String
Body: String 
OnClick: Function 
IconLeft: String 
IconRight: String
ClassName: String 
FirstItem: Booleane
*/

var List = React.createClass({

	getLinkClass: function() {
		return this.props.className + "-link"
	},

	getLeftIcon: function() {
		return 'icon icon-' + this.props.iconLeft + ' ' + this.props.className + '-icon' 
	},

	getDetailClass: function() {
		return this.props.className + "-detail" 
	},

	getTitleClass: function() {
		return this.props.className + "-title"
	},

	getBodyClass: function() {
		return this.props.className + "-body"
	},

	getRightIcon: function() {
		return 'icon icon-' + this.props.iconRight + ' ' + this.props.className + '-view-icon' 
	},

	getStyle: function() {
		if (this.props.firstItem === true) {
			return {
				borderBottom: 'none'
			}
		}
	},  	

	render: function() {
	console.log('List has been rendered')	
		return (
			<li className={this.props.className} style={this.getStyle()} onClick={this.props.onClick}>
				<a className={this.getLinkClass()}>
					<i className={this.getLeftIcon()}></i>
					<div className={this.getDetailClass()}>
						<div className={this.getTitleClass()}>{this.props.title}</div>
						<div className={this.getBodyClass()}>{this.props.body}</div>
					</div>
					<i className={this.getRightIcon()}></i>
				</a>
			</li>
		);
	}

});

module.exports = List;