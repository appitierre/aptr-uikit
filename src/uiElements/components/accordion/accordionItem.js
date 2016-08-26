var React = require('react');
var classNames = require('classnames');
var Button = require('../buttons/button');

var AccordionItem = React.createClass({

	getInitialState: function() {
		return {
			_isVisible: false
		}
	},

	propTypes: {
		className: React.PropTypes.string,
		content: React.PropTypes.any.isRequired,
		itemTitle: React.PropTypes.string
	},

	renderClassName: function() {
		return classNames('accordion-item', this.props.className);
	},

	renderContent: function() {
		if (this.state._isVisible === false) {
			return (
				<div className="accordion-item-content">
					{this.props.content}
				</div>
			)
		}
	},

	renderIcon: function() {
		if (this.state._isVisible) {
			return 'plus'
		} else {
			return 'minus'
		}
	},

	onClick: function() {
		if (this.props.onClick) {
			this.props.onClick();
		}

		this.setState({
			_isVisible: !this.state._isVisible
		})
	},

	render: function() {	
		return (
			<div className={this.renderClassName()}>
				<Button
					icon={this.renderIcon()}
					className="accordion-item-title" 
					text={this.props.itemTitle}
					type="full-width primary"
					onClick={this.onClick}/>
				{this.renderContent()}
			</div>
		);
	}

});

module.exports = AccordionItem;