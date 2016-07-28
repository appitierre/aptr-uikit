var React = require('react');
var CssValue = require('../cssValue/cssValue');

var CssPaddingMarginSelector = React.createClass({

	getInitialState: function() {
		return {
			topClickedFirst: false,
			rightClickedFirst: false,
			bottomClickedFirst: false,
			leftClickedFirst: false
		}
	},

	getClassName: function() {
		return {
			top: "button css-padding-margin-selector-button css-padding-margin-selector-button-padding-top", 
			right: "button css-padding-margin-selector-button css-padding-margin-selector-button-margin-top",
			bottom: "button css-padding-margin-selector-button css-padding-margin-selector-button-padding-right",
			left: "button css-padding-margin-selector-button css-padding-margin-selector-button-margin-right"
		}
	},

	onTopButtonClicked: function(event) {
		event.preventDefault();
		var props = this.props;

		this.setState({
			topClickedFirst: !this.state.topClickedFirst,
			rightClickedFirst: false,
			bottomClickedFirst: false,
			leftClickedFirst: false
		});

		this.props.onChange(!props.top, props.right, props.bottom, props.left);
	},

	onRightButtonClicked: function(event) {
		event.preventDefault();
		var props = this.props;

		this.setState({
			topClickedFirst: false,
			rightClickedFirst: !this.state.rightClickedFirst,
			bottomClickedFirst: false,
			leftClickedFirst: false
		});

		this.props.onChange(props.top, !props.right, props.bottom, props.left);
	},

	onBottomButtonClicked: function(event) {
		event.preventDefault();
		var props = this.props;

		this.setState({
			topClickedFirst: false,
			rightClickedFirst: false,
			bottomClickedFirst: !this.state.bottomClickedFirst,
			leftClickedFirst: false
		});

		this.props.onChange(props.top, props.right, !props.bottom, props.left);
	},

	onLeftButtonClicked: function(event) {
		event.preventDefault();
		var props = this.props;

		this.setState({
			topClickedFirst: false,
			rightClickedFirst: false,
			bottomClickedFirst: false,
			leftClickedFirst: !this.state.leftClickedFirst
		})

		this.props.onChange(props.top, props.right, props.bottom, !props.left);
	},

	getValue: function() {
		if (this.state.topClickedFirst) {
			return this.props.topValue
		} else if (this.state.rightClickedFirst) {
			return this.props.rightValue
		} else if (this.state.bottomClickedFirst) {
			return this.props.bottomValue
		} else if (this.state.leftClickedFirst) {
			return this.props.leftValue
		} else {
			return 0
		}

		console.log('first', this.state.topClickedFirst)
	},

	renderCssValue: function() {
		return (
			<CssValue 
				value={this.getValue()}
				unit="px"
				onChange={this.props.onValueChange}
			/>
		) 
	},

	getItems: function() {
		return (
			<div>
				<div className="css-padding-margin-selector">
						<button className={this.getClassName().top} onClick={this.onTopButtonClicked}>
							{this.props.topValue}
						</button>
										
						<button className={this.getClassName().right} onClick={this.onRightButtonClicked}>
							{this.props.rightValue}
						</button>
								
						<button className={this.getClassName().bottom} onClick={this.onBottomButtonClicked}>
							{this.props.bottomValue}
						</button>

						<button className={this.getClassName().left} onClick={this.onLeftButtonClicked}>
							{this.props.leftValue}
						</button>
				</div>
				<div>	
					{this.renderCssValue()}
				</div>
			</div>
		)
	},

	render: function() {
		return this.getItems();
	}

});

module.exports = CssPaddingMarginSelector;