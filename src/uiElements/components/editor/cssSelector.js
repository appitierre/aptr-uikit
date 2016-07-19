var React = require('react');
var classnames = require('classnames');
var Button = require('../buttons/button');

var CssSelector = React.createClass({

	getButtonType: function() {
		if (this.props.top && this.props.right && this.props.bottom && this.props.left) {
			return {
				top: '',
				right: '',
				bottom: '',
				left: '',
				center: 'primary'
			}
		}

		return {
			top: classnames({'primary': (this.props.top)}),
			right: classnames({'primary': (this.props.right)}),
			bottom: classnames({'primary': (this.props.bottom)}),
			left: classnames({'primary': (this.props.left)}),
			center: ''
		}
	},

	getItems: function() {
		return (
			<div className="css-selector">
				<div className="css-selector-top">	
					<Button 
						icon={this.props.topIcon}
						className="css-selector-top-button"
						type={this.getButtonType().top}
						onClick={this.onTopButtonClicked}
					/>
				</div>
				<div className="css-selector-middle">
					<Button 
						icon={this.props.leftIcon}
						className="css-selector-left-button"
						type={this.getButtonType().left}
						onClick={this.onLeftButtonClicked}
					/>
					<Button 
						icon={this.props.centreIcon}
						className="css-selector-centre-button"
						type={this.getButtonType().center}
						onClick={this.onCentreButtonClicked}
					/>
					<Button 
						icon={this.props.rightIcon}
						className="css-selector-right-button"
						type={this.getButtonType().right}
						onClick={this.onRightButtonClicked}
					/>
				</div>
				<div className="css-selector-bottom">
					<Button 
						icon={this.props.bottomIcon}
						className="css-selector-bottom-button"
						type={this.getButtonType().bottom}
						onClick={this.onBottomButtonClicked}
					/>
				</div>
			</div>
		)
	},

	onTopButtonClicked: function(event) {
		event.preventDefault();
		var props = this.props;
		if (props.top && props.right && props.bottom && props.left) {
			this.props.onChange(true, false, false, false);	
		} else {
			this.props.onChange(!props.top, props.right, props.bottom, props.left);
		}
	},

	onLeftButtonClicked: function(event) {
		event.preventDefault();
		var props = this.props;
		if (props.top && props.right && props.bottom && props.left) {
			this.props.onChange(false, false, false, true);	
		} else {
			this.props.onChange(props.top, props.right, props.bottom, !props.left);
		}
	},

	onCentreButtonClicked: function(event) {
		event.preventDefault();
		var props = this.props;
		if (props.top && props.right && props.bottom && props.left) {
			this.props.onChange(false, false, false, false);	
		} else {
			this.props.onChange(true, true, true, true)
		}
	},

	onRightButtonClicked: function(event) {
		event.preventDefault();
		var props = this.props;
		if (props.top && props.right && props.bottom && props.left) {
			this.props.onChange(false, true, false, false);	
		} else {
			this.props.onChange(props.top, !props.right, props.bottom, props.left);
		}
	},

	onBottomButtonClicked: function(event) {
		event.preventDefault();
		var props = this.props;
		if (props.top && props.right && props.bottom && props.left) {
			this.props.onChange(false, false, true, false);	
		} else {
			this.props.onChange(props.top, props.right, !props.bottom, props.left);
		}
	},

	render: function() {
		return this.getItems();
	}

});

module.exports = CssSelector;