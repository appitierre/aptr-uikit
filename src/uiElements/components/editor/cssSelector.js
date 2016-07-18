var React = require('react');
var Button = require('../buttons/button');

var CssSelector = React.createClass({

	getItems: function() {
		return (
			<div className="css-selector">
				<div className="css-selector-top">	
					<Button 
						icon="border-top"
						className="css-selector-top-button"
						type="secondary"
						onClick={this.props.onTopButtonClicked}
					/>
				</div>
				<div className="css-selector-middle">
					<Button 
						icon="border-left"
						className="css-selector-left-button"
						type="secondary"
						onClick={this.props.onLeftButtonClicked}
					/>
					<Button 
						icon="border-outer"
						className="css-selector-centre-button"
						type="primary"
						onClick={this.props.onCentreButtonClicked}
					/>
					<Button 
						icon="border-right"
						className="css-selector-right-button"
						type="secondary"
						onClick={this.props.onRightButtonClicked}
					/>
				</div>
				<div className="css-selector-bottom">
					<Button 
						icon="border-bottom"
						className="css-selector-bottom-button"
						type="secondary"
						onClick={this.props.onBottomButtonClicked}
					/>
				</div>
			</div>
		)
	},

	render: function() {
		return this.getItems();
	}

});

module.exports = CssSelector;