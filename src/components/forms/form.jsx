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
					<div className="form-field-area" contentEditable="true">
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Form;