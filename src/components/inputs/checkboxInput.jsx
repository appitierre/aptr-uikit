var React = require('react');

var CheckboxInput = React.createClass({

	render: function() {
	console.log('checkk box rendered yeaa')	
		return (
			<div>
				<input type='checkbox'/>
				<div className='checkbox-item-text'>
					{this.props.text}
				</div>
			</div>
		);
	}

});

module.exports = CheckboxInput;