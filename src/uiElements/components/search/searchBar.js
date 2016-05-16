var React = require('react');
var Button = require('../buttons/button'); 

var SearchBar = React.createClass({

	getInitialState: function() {
		return {
			value: ''
		}
	},

	getButton: function() {
		if (this.state.value.length === 0) {
			return (
				<Button icon='magnifier' className='search-bar-button'/>
			)
		} else {
			return (
				<Button icon='cross-circle' className='primary search-bar-button' onClick={this.onButtonClicked}/>
			)
		}
	},

	// onkeydown: function(event) {
	// 	if (event.keyCode === 13) {
	// 	console.log('13')
	// 		this.props.onClick();
	// 	} else {
	// 		console.log('no')
	// 	}

	// 	console.log('r')
	// },

	onButtonClicked: function(event) {
		event.preventDefault();
		this.setState({
			value: ''
		})
		this.props.onChange('');
	},

	onChange: function(event) {
		var value = event.target.value;
		this.props.onChange(value);

		this.setState({
			value: value
		})
	},

	render: function() {
		return (
			<div className='search-bar'>
				<input className='search-bar-input' value={this.state.value} onChange={this.onChange} />
				{this.getButton()}
			</div>								
		);
	}
});

module.exports = SearchBar;