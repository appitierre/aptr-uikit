var React = require('react');
var Button = require('../buttons/button');

var CssBorderRadiusSelector = React.createClass({

	renderItems: function() {
		return (
			<div className="css-border-radius-selector">
				<div className="css-border-radius-selector-top">
					<Button className="css-border-radius-selector-top-left-button"/>
					<Button 
						className="css-border-radius-selector-top-right-button"
						type="primary"
						icon="star"/> 
				</div>
				<div className="css-border-radius-selector-centre">
					<Button />
				</div>
				<div className="css-border-radius-selector-bottom">
					<Button />
					<Button />
				</div>
			</div>
		);
	},

	render: function() {
		return this.renderItems();
	}

});

module.exports = CssBorderRadiusSelector;