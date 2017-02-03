var React = require('react');
var classnames = require('classnames');
var Button = require('../../buttons/components/button');

var CssBorderRadiusSelector = React.createClass({

	getClassName: function() {
		if (this.props.topLeft && this.props.topRight && this.props.bottomRight && this.props.bottomLeft) {
			return {
				topLeft: 'button css-border-radius-selector-button css-border-radius-selector-button-top-left',
				topRight: 'button css-border-radius-selector-button css-border-radius-selector-button-top-right',
				bottomRight: 'button css-border-radius-selector-button css-border-radius-selector-button-bottom-right',
				bottomLeft: 'button css-border-radius-selector-button css-border-radius-selector-button-bottom-left',
				center: 'button css-border-radius-selector-button css-border-radius-selector-button-center primary' 
			}
		} 

		return {
			topLeft: classnames({'button css-border-radius-selector-button css-border-radius-selector-button-top-left primary': (this.props.topLeft)}, 
				{'button css-border-radius-selector-button css-border-radius-selector-button-top-left': (!this.props.topLeft)}),
			
			topRight: classnames({'button css-border-radius-selector-button css-border-radius-selector-button-top-right primary': (this.props.topRight)},
				{'button css-border-radius-selector-button css-border-radius-selector-button-top-right': !this.props.topRight}),
			
			bottomRight: classnames({'button css-border-radius-selector-button css-border-radius-selector-button-bottom-right primary': (this.props.bottomRight)},
				{'button css-border-radius-selector-button css-border-radius-selector-button-bottom-right': !this.props.bottomRight}),
			
			bottomLeft: classnames({'button css-border-radius-selector-button css-border-radius-selector-button-bottom-left primary': (this.props.bottomLeft)},
				{'button css-border-radius-selector-button css-border-radius-selector-button-bottom-left': !this.props.bottomLeft}),
			
			center: classnames({'button css-border-radius-selector-button css-border-radius-selector-button-center': !this.props.center}),
		}
	},	

	renderItems: function() {
		return (
			<div className="css-border-radius-selector">
					<button 
						className={this.getClassName().topLeft}
						onClick={this.onTopLeftButtonClicked}>
						<span className="css-border-radius-selector-button-icon-top-left">
						</span>
					</button>
					<button 
						className={this.getClassName().topRight}
						onClick={this.onTopRightButtonClicked}>
						<span className="css-border-radius-selector-button-icon-top-right">
						</span>
					</button> 
				
				
					<button
						className={this.getClassName().center}
						onClick={this.onCentreButtonClicked}>
						<span className="css-border-radius-selector-button-icon-center">
						</span>
					</button>
				
				
					<button 
						className={this.getClassName().bottomLeft}
						onClick={this.onBottomLeftClicked}>
						<span className="css-border-radius-selector-button-icon-bottom-left">
						</span>
					</button>
					<button 
						className={this.getClassName().bottomRight}
						onClick={this.onBottomRightClicked}>
						<span className="css-border-radius-selector-button-icon-bottom-right">
						</span>
					</button>
				
			</div>
		);
	},

	onTopLeftButtonClicked: function(event) {
		event.preventDefault();
		var props = this.props;
		if (props.topLeft && props.topRight && props.bottomRight && props.bottomLeft) {
			this.props.onChange(true, false, false, false);	
		} else {
			this.props.onChange(!props.topLeft, props.topRight, props.bottomRight, props.bottomLeft);
		}
	},

	onTopRightButtonClicked: function(event) {
		event.preventDefault();
		var props = this.props;
		if (props.topLeft && props.topRight && props.bottomRight && props.bottomLeft) {
			this.props.onChange(false, true, false, false);	
		} else {
			this.props.onChange(props.topLeft, !props.topRight, props.bottomRight, props.bottomLeft);
		}
	},

	onCentreButtonClicked: function(event) {
		event.preventDefault();
		var props = this.props;
		if (props.topLeft && props.topRight && props.bottomRight && props.bottomLeft) {
			this.props.onChange(false, false, false, false);	
		} else {
			this.props.onChange(true, true, true, true)
		}
	},

	onBottomRightClicked: function(event) {
		event.preventDefault();
		var props = this.props;
		if (props.topLeft && props.topRight && props.bottomRight && props.bottomLeft) {
			this.props.onChange(false, false, true, false);	
		} else {
			this.props.onChange(props.topLeft, props.topRight, !props.bottomRight, props.bottomLeft);
		}
	},

	onBottomLeftClicked: function(event) {
		event.preventDefault();
		var props = this.props;
		if (props.topLeft && props.topRight && props.bottomRight && props.bottomLeft) {
			this.props.onChange(false, false, false, true);	
		} else {
			this.props.onChange(props.topLeft, props.topRight, props.bottomRight, !props.bottomLeft);
		}
	},

	render: function() {
		return this.renderItems();
	}

});

module.exports = CssBorderRadiusSelector;