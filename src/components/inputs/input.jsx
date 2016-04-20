var React = require('react');

/* 
PROPS:
Title: String
*/

var Input = React.createClass({

	render: function() {	
		return (
			<div className="input-field">
				<div className="input-field-inner">
					<label>
						{this.props.title}
					</label>
					<div className="input-field-help">
						{this.props.description}
					</div>
					<input className="input-field-area"  placeholder="Type to add...">
					</input>
				</div>
			</div>
		);
	}

});

module.exports = Input;