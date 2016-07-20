var React = require('react');
var Button = require('../buttons/button');

var CssBorderRadiusSelector = React.createClass({

	renderItems: function() {
		return (
			<div className="css-border-radius-selector">
				<div className="css-border-radius-selector-top">
					<button 
						className="button css-border-radius-selector-top-left-button"
						onClick={this.onTopLeftButtonClicked}>
					</button>
					<button 
						className="button css-border-radius-selector-top-right-button"
						onClick={this.onTopRightButtonClicked}>
					</button> 
				</div>
				<div className="css-border-radius-selector-centre">
					<button
						className="button css-border-radius-selector-centre-button"
						onClick={this.onCentreButtonClicked}>
					</button>
				</div>
				<div className="css-border-radius-selector-bottom">
					<button 
						className="button css-border-radius-selector-bottom-left-button"
						onClick={this.onBottomLeftClicked}>
					</button>
					<button 
						className="button css-border-radius-selector-bottom-right-button"
						onClick={this.onBottomRightClicked}>
					</button>
				</div>
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