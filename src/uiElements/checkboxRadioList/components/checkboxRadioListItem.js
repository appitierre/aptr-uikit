var React = require('react');
var Button = require('../../buttons/components/button');
var classnames = require('classnames');

var CheckboxRadioListItem = React.createClass({

	getClassName: function() {
		
		return {
			className: classnames({"checkbox-radio-list-item radio": this.props.type === "radio"},
				{"checkbox-radio-list-item checkbox": this.props.type === "checkbox"}),
			stateClassName: classnames({"checkbox-radio-list-item-state radio": this.props.type === "radio"},
				{"checkbox-radio-list-item-state checkbox": this.props.type === "checkbox"}),
			labelClassName: classnames({"checkbox-radio-list-item-label radio": this.props.type === "radio"},
				{"checkbox-radio-list-item-label checkbox": this.props.type === "checkbox"})
		}
	},	

	getItem: function() {

		return (
			<div className={this.getClassName().className}>
				<input 
					type={this.props.type}
					id={this.props.item.id}
					value={this.props.item._isSelected}
					checked={this.props.item._isSelected}
					onChange={this.onChange}
					className="checkbox-radio-list-item-input"
				/>
				<label htmlFor={this.props.item.id} className={this.getClassName().labelClassName}>
						<div className={this.getClassName().stateClassName}>
						</div>
						{this.props.item.text}
				</label>
			</div>
		)
	},

	onChange: function() {
		this.props.onChange(this.props.item);
	},
	
	render: function() {
		return this.getItem();
	}

});

module.exports = CheckboxRadioListItem;