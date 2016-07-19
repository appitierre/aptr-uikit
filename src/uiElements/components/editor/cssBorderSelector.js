var React = require('react');
var classnames = require('classnames');
var Button = require('../buttons/button');

var CssBorderSelector = React.createClass({

	getClassName: function() {
		if (this.props.top && this.props.right && this.props.bottom && this.props.left) {
			return {
				top: 'button css-selector-top-button',
				right: 'button css-selector-right-button',
				bottom: 'button css-selector-bottom-button',
				left: 'button css-selector-left-button',
				centre: 'button css-selector-centre-button primary'
			}
		} 

		return {
			top: classnames({'button css-selector-top-button primary': (this.props.top)}, 
				{'button css-selector-top-button': (!this.props.top)}),
			
			right: classnames({'button css-selector-right-button primary': (this.props.right)},
				{'button css-selector-right-button': !this.props.right}),
			
			bottom: classnames({'button css-selector-bottom-button primary': (this.props.bottom)},
				{'button css-selector-bottom-button': !this.props.bottom}),
			
			left: classnames({'button css-selector-left-button primary': (this.props.left)},
				{'button css-selector-left-button': !this.props.left}),
			
			centre: classnames({'button css-selector-centre-button': !this.props.centre}),
		}
	},

	getItems: function() {
		return (
			<div className="css-selector">
				<div className="css-selector-top">	
					<button 
						className={this.getClassName().top}
						onClick={this.onTopButtonClicked}>
						<span className="css-selector-top-icon"></span>
					</button>
				</div>
				<div className="css-selector-middle">
					<button 
						className={this.getClassName().left}
						onClick={this.onLeftButtonClicked}>
						<span className="css-selector-left-icon"></span>
					</button>
					<button 
						className={this.getClassName().centre}
						onClick={this.onCentreButtonClicked}>
						<span className="css-selector-centre-icon"></span>
					</button>
					<button 
						className={this.getClassName().right}
						onClick={this.onRightButtonClicked}>
						<span className="css-selector-right-icon"></span>
					</button>
				</div>
				<div className="css-selector-bottom">
					<button 
						className={this.getClassName().bottom}
						onClick={this.onBottomButtonClicked}>
						<span className="css-selector-bottom-icon"></span>
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