var React = require('react');
var classnames = require('classnames');
var Button = require('../buttons/button');

var CssBorderSelector = React.createClass({

	propTypes: {
		top: React.PropTypes.bool,
		right: React.PropTypes.bool,
		bottom: React.PropTypes.bool,
		left: React.PropTypes.bool,
		center: React.PropTypes.bool,
		onChange: React.PropTypes.func.isRequired
	},

	getClassName: function() {
		if (this.props.top && this.props.right && this.props.bottom && this.props.left) {
			return {
				top: 'button css-border-selector-button css-border-selector-button-top',
				right: 'button css-border-selector-button css-border-selector-button-right',
				bottom: 'button css-border-selector-button css-border-selector-button-bottom',
				left: 'button css-border-selector-button css-border-selector-button-left',
				centre: 'button css-border-selector-button css-border-selector-button-center primary'
			}
		} 

		return {
			top: classnames({'button css-border-selector-button css-border-selector-button-top primary': (this.props.top)}, 
				{'button css-border-selector-button css-border-selector-button-top': (!this.props.top)}),
			
			right: classnames({'button css-border-selector-button css-border-selector-button-right primary': (this.props.right)},
				{'button css-border-selector-button css-border-selector-button-right': !this.props.right}),
			
			bottom: classnames({'button css-border-selector-button css-border-selector-button-bottom primary': (this.props.bottom)},
				{'button css-border-selector-button css-border-selector-button-bottom': !this.props.bottom}),
			
			left: classnames({'button css-border-selector-button css-border-selector-button-left primary': (this.props.left)},
				{'button css-border-selector-button css-border-selector-button-left': !this.props.left}),
			
			centre: classnames({'button css-border-selector-button css-border-selector-button-center': !this.props.centre}),
		}
	},

	getItems: function() {
		return (
			<div className="css-border-selector">
				<div className="css-border-selector-top">	
					<button 
						className={this.getClassName().top}
						onClick={this.onTopButtonClicked}>
						<span className="css-border-selector-button-icon-top"></span>
					</button>
				</div>
				<div className="css-border-selector-middle">
					<button 
						className={this.getClassName().left}
						onClick={this.onLeftButtonClicked}>
						<span className="css-border-selector-button-icon-left"></span>
					</button>
					<button 
						className={this.getClassName().centre}
						onClick={this.onCentreButtonClicked}>
						<span className="css-border-selector-button-icon-center"></span>
					</button>
					<button 
						className={this.getClassName().right}
						onClick={this.onRightButtonClicked}>
						<span className="css-border-selector-button-icon-right"></span>
					</button>
				</div>
				<div className="css-border-selector-bottom">
					<button 
						className={this.getClassName().bottom}
						onClick={this.onBottomButtonClicked}>
						<span className="css-border-selector-button-icon-bottom"></span>
					</button>
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

module.exports = CssBorderSelector;