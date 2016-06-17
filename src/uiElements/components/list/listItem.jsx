var React = require('react');
var FlatButton = require('../buttons/flatButton');
var ListItemWrapper = require('./listItemWrapper');

var ListItem = React.createClass({

	renderButtons: function() {
		if (this.props.buttons) {
			return _.map(this.props.buttons, function(button, key){
				return (
					<FlatButton 
						{...button}
						key={key}
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

	renderListItemDetail: function() {
		if (this.props.itemDetail) {
			return (
				<div className="list-item-detail">
					{this.props.itemDetail}
				</div>
			)
		}
	},

	renderItems: function() {
		if (!this.props.component) {
			return (
				<li className="list-item">
					<ListItemWrapper {...this.props}>
						<div className="list-item-icon">
							{this.renderIcon()}
						</div>
						<div className="list-item-content">
							<div className="list-item-content-inner">
								<div className="list-item-text">
									{this.props.itemText}
								</div>
								{this.renderListItemDetail()}
							</div>
						</div>
						<div className="list-item-buttons">
							{this.renderButtons()}
						</div>
					</ListItemWrapper>
				</li>
			)
		} else {
			return (
				<li className="list-item">
					<ListItemWrapper {...this.props}>
						{this.props.component}
					</ListItemWrapper>
				</li>
			)
		}
	},

	render: function() {
		return this.renderItems()
	}
});

module.exports = ListItem;