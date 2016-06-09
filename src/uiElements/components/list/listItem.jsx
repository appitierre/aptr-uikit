var React = require('react');
var FlatButton = require('../buttons/flatButton');
var ListItemWrapper = require('../wrappers/listItemWrapper');

var ListItem = React.createClass({

	renderButtons: function() {
		if (this.props.buttons) {
			return _.map(this.props.buttons, function(button){
				return (
					<FlatButton 
						type={button.type}
						icon={button.icon}
					/>
				)
			})
		} 
	},

	renderIcon: function() {
		if (this.props.icon) {
			return <i className={"icon icon-" + this.props.icon} /> 
		};
	},

	render: function() {
		return (
			<div className="list-item">
				<ListItemWrapper {...this.props}>
					<div className="list-item-icon">
						{this.renderIcon()}
					</div>
					<div className="list-item-text">
						{this.props.text}
					</div>
					<div className="list-item-buttons">
						{this.renderButtons()}
					</div>
				</ListItemWrapper>	
			</div>
		);
	}
});

module.exports = ListItem;