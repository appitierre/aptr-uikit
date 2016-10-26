var React = require('react');
var Section = require('section');
var Button = require('../components/button');
var FlatButton = require('../components/flatButton'); 

var ButtonExamples = React.createClass({

	getComponents: function() {
		return [
			<Button
				text="Primary Button"
				type="primary"
				icon="key"
				key={0}
			/>,
			<Button
				text="Secondary Button"
				type="secondary"
				onClick={this.onClick}
				icon="star"
				key={1}
			/>,
			<Button
				text="Alert Button"
				type="alert"
				onClick={this.onClick}
				icon="trash"
				key={2}
			/>,
			<Button
				text="Disabled Button"
				disabled={true}
				onClick={this.onClick}
				icon="trash"
				key={3}
			/>,
			<Button
				text="Large Button"
				type="primary large"
				onClick={this.onClick}
				icon="trash"
				key={4}
			/>,
			<Button
				onClick={this.onClick}
				icon="arrow-left"
				key={5}
			/>,
			<div style={{width:"460px"}}>
				<Button
					text="Full width button"
					onClick={this.onClick}
					icon="star"
					type="primary full-width"
					key={6}
				/>
			</div>,
			<Button
				type="secondary"
				text="Small Secondary"
				onClick={this.onClick}
				icon="register"
				key={5}
				isSmall={true}
			/>,
			<Button
				type="alert"
				text="Small Alert"
				onClick={this.onClick}
				icon="trash"
				key={5}
				isSmall={true}
			/>,
			<Button
				type="primary"
				text="Small primary"
				onClick={this.onClick}
				icon="key"
				key={5}
				isSmall={true}
			/>,
		]
	},

	getFlatButtonComponents: function() {
		return [
			<FlatButton 
				icon="pencil4"
				type="secondary"
				onClick={this.onClick}
			/>,
			<FlatButton 
				icon="register"
				type="primary"
				onClick={this.onClick}
			/>,
			<FlatButton 
				icon="trash"
				type="alert"
				onClick={this.onClick}
			/>,
			<FlatButton
				text="Secondary flat" 
				icon="star"
				type="secondary"
				onClick={this.onClick}
			/>,
			<FlatButton
				text="Primary flat" 
				icon="star"
				type="primary"
				onClick={this.onClick}
			/>,
			<FlatButton
				text="Plain flat" 
				icon="star"
				onClick={this.onClick}
			/>,
		]
	},

	onClick: function() {
		console.log('A Button has been clicked');
	},

	render: function() {
		return (
			<div>
				<Section
					title="Buttons"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
				<Section 
					title="Flat Buttons"
					components={this.getFlatButtonComponents()}
				/>
			</div>
		);
	}

});

module.exports = ButtonExamples;