var React = require('react');

var Loading = React.createClass({

	render: function() {
	console.log('rendered')
		return (
			<div className="loading">
				<div className="loading-inner">
					<div className="loading-icon">
						<div className="loading-icon-spinner">
						</div>
					</div>
					<div className="loading-text">
						{this.props.text}
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Loading;