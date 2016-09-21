var React = require('react');
var Button = require('../buttons/button');
var classNames = require('classnames') 

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

	getClassName: function() {
		return classNames('search-bar', this.props.className);
	},

	getPlaceholdetText: function() {
		if (this.props.placeholder) {
			return this.props.placeholder
		}
	},	

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

		if (!this.props.value) {	
			this.setState({
				value: value
			})
		}
	},

	getComponent: function() {
		if (this.props.value) {
			return (
				<div className={this.getClassName()}>
					<input className='search-bar-input' value={this.props.value} onChange={this.onChange} placeholder={this.getPlaceholdetText()}/>
						{this.getButton()}
				</div>	
			)
		} else {
			return (
				<div className={this.getClassName()}>
					<input className='search-bar-input' value={this.state.value} onChange={this.onChange} placeholder={this.getPlaceholdetText()}/>
					{this.getButton()}
				</div>
			)
		}
	},
 
	render: function() {
		return this.getComponent();
	}
});

module.exports = SearchBar;