var React = require('react');

var SearchBar = React.createClass({

	getInitialState: function() {
		return {
			value: ''
		}
	},

	getButton: function() {
		if (this.state.value.length === 0) {
			return (
				this.props.deafultButton
			)
		} else {
			return (
				this.props.otherButton
			)
		}
	},

	onkeydown: function(event) {
		if (event.keyCode === 13) {
			this.props.onClick();
		}
	},

	onChange: function(event) {
		this.props.onChange(event);
		var value = event.target.value;

		this.setState({
			value: value
		})

		console.log(this.state.value)
	},

	render: function() {

		return (
			<div className='search-bar'>
				<input className='search-bar-input' onChange={this.onChange} onKeyDown={this.onkeydown}/>
				{this.getButton()}
			</div>								
		);
	}
});

module.exports = SearchBar;