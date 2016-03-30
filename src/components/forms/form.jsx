var React = require('react');

/* 
PROPS:
Title: String
*/

var Form = React.createClass({

	render: function() {	
		return (
			<div className="form-field">
				<div className="form-field-inner">
					<label>
						{this.props.title}
					</label>
					<div className="forms-field-help">
						{this.props.description}
					</div>
					<input className="form-field-area"  placeholder="Type to add...">
					</input>
				</div>
			</div>
		);
	}

});

module.exports = Form;