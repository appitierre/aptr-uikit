var React = require('react');
var CheckboxItemWrapper = require('./checkboxItemWrapper.jsx');

var Checkbox = React.createClass({
	
	getInitialState: function() {
		return {
			_isChecked: false
		}
	},

	onClick: function() {
		
		this.setState({
			_isChecked: !this.state._isChecked
		});


		if (this.props.onClick) {
			this.props.onClick();
		}

		console.log('clicked', this.state._isChecked)
	},

	render: function() {
		return (
			<div className="checkbox-item">
				<input type="checkbox" id={this.props.id} checked={this.state._isChecked}/>
				<CheckboxItemWrapper {...this.props} onClick={this.onClick} >	
					<label htmlFor={this.props.id}>
						<div className="checkbox-item-state">
							<div className="checkbox-item-state-default icon">
							</div>
						</div>
						<span className="checkbox-item-text">
							{this.props.itemText}
						</span>
					</label>
				</CheckboxItemWrapper>
			</div>
		);
	}

});

module.exports = Checkbox;