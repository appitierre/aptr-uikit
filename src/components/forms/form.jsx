var React = require('react');

var Form = React.createClass({

	render: function() {	
		return (
			<div className="form-field">
				<div className="form-field-inner">
					<label>
						{this.props.title}
					</label>
					<div className="form-field-area" contentEditable="true">
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Form;