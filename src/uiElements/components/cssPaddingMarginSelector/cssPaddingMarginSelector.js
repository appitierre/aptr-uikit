var React = require('react');
var CssValue = require('../cssValue/cssValue');

var CssPaddingMarginSelector = React.createClass({

	getInitialState: function() {
		return {
			marginTopCssValueVisible: false
		}
	},

	getClassName: function() {
		return {
			paddingTop: "button css-padding-margin-selector-button-padding-top", 
			marginTop: "button css-padding-margin-selector-button-margin-top",
			paddingRight: "button css-padding-margin-selector-button-padding-right",
			marginRight: "button css-padding-margin-selector-button-margin-right",
			paddingBottom: "button css-padding-margin-selector-button-padding-bottom",
			marginBottom: "button css-padding-margin-selector-button-margin-bottom",
			paddingLeft	: "button css-padding-margin-selector-button-padding-left",
			marginLeft: "button css-padding-margin-selector-button-margin-left"
		}
	},

	onMarginTopIncrease: function() {
		this.props.onMarginTopIncrease(1)
	},

	onMarginTopDecrease: function() {
		this.props.onMarginTopDecrease(1)
	},

	onMarginTopChange: function() {
		this.props.onMarginTopChange()
	},

	onMarginTopValueClicked: function() {
		this.setState({
			marginTopCssValueVisible: !this.state.marginTopCssValueVisible
		})
	},

	getMarginTopCssValue: function() {
		if (this.state.marginTopCssValueVisible) {
			return (
				<CssValue 
					unit="px"
					value={this.props.marginTop}
					onChange={this.props.onMarginTopChange}
					onIncrease={this.onMarginTopIncrease}
					onDecrease={this.onMarginTopDecrease}
				/>
			)
		} else {
			return null
		}
	},

	onPaddingTopIncrease: function() {
		this.props.onPaddingTopIncrease(1)
	},


	getItems: function() {
	console.log(this.state)
		return (
			<div className="css-padding-margin-selector">
				<div className="css-padding-margin-selector-top">
					<button className={this.getClassName().marginTop} onClick={this.onMarginTopIncrease}>
						margin top
					</button>
					<div className="css-padding-margin-selector-margin-top-value" onClick={this.onMarginTopValueClicked}>
						{this.props.marginTop}
					</div>
						{this.getMarginTopCssValue()}
					<button className={this.getClassName().paddingTop} onClick={this.onPaddingTopIncrease}>
					 	padding top
					</button>
					<div className="css-padding-margin-selector-padding-top-value">
						{this.props.paddingTop}
					</div>
				</div>
					
				<div className="css-padding-margin-selector-right">
					<button className={this.getClassName().marginRight}>
						margin right
					</button>
					<button className={this.getClassName().paddingRight}>
						padding right
					</button>
				</div>

				<div className="css-padding-margin-selector-bottom">	
					<button className={this.getClassName().marginBottom}>
						marginBottom 
					</button>
					<button className={this.getClassName().paddingBottom}>
						paddingBottom
					</button>
				</div>

				<div className="css-padding-margin-selector-left">
					<button className={this.getClassName().marginLeft}>
						marginLeft
					</button>
					<button className={this.getClassName().paddingLeft}>
						paddingLeft
					</button>
				</div>
			</div>
		)
	},

	render: function() {
		return this.getItems();
	}

});

module.exports = CssPaddingMarginSelector;