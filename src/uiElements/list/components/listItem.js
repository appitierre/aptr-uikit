var React = require('react');
var FlatButton = require('../../buttons/components/flatButton');
var ListItemWrapper = require('./listItemWrapper');
var classNames = require('classnames');

var ListItem = React.createClass({

	getAccessibilityTags: function() {
        return {role: 'listitem'};
    },

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
		var className = classNames('list-item', this.props.className ? this.props.className :'');
		if (!this.props.component) {
			return (
				<li className={className} {...this.getAccessibilityTags()}>
					<ListItemWrapper {...this.props}>
						<div className="list-item-icon">
							{this.renderIcon()}
						</div>
						<div className="list-item-content">
							<div className="list-item-content-inner" style={this.getIconStyle()}>
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
				<li className={className} {...this.getAccessibilityTags()}>
					<ListItemWrapper {...this.props}>
						{this.props.component}
					</ListItemWrapper>
				</li>
			)
		}
	},

	getIconStyle: function() {
		if (!this.props.icon) {
			return {
				paddingLeft: 8
			}
		}
	},

	render: function() {
		return this.renderItems()
	}
});

module.exports = ListItem;