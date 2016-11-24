var React = require('react');
var Button = require('../../buttons/components/button');

var RadioListItem = React.createClass({

	onChange: function() {
		this.props.onChange(this.props.item);
	},	

	getItem: function() {
		var className = "";
		var stateClassName = "";

		if (this.props.type === "radio" || !this.props.type) {
			className = "radio-list-item";
			stateClassName = "radio-list-item-state";
		} else {
			className = "checkbox-item";
			stateClassName = "checkbox-item-state";
		}

		return (
			<div className={className}>
				<input 
					type={this.props.type}
					id={this.props.item.id}
					value={this.props.item._isSelected}
					checked={this.props.item._isSelected}
					onChange={this.onChange}
					className="item-input"
				/>
				<label htmlFor={this.props.item.id} >
						<div className={stateClassName}>
						</div>
						{this.props.item.text}
				</label>
				
			</div>
		)
	},

	render: function() {
	console.log(this.props.item.id, this.props.item._isSelected)
		return this.getItem();
	}

});

module.exports = RadioListItem;