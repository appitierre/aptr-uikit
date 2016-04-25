var React = require('react');

var PasswordInput = React.createClass({

	render: function() {
	console.log('PasswordInput')	
		return (
			<div>
				<input type='password'/>
			</div>
		);
	}

});

module.exports = PasswordInput;