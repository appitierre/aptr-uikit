var React = require('react');

var Card = React.createClass({

	getClassName: function() {
		
		var className = 'card';

		if (this.props.className) {
			className += ' ' + this.props.className;
		}

		return className;

	},

	render: function() {
		return (
			<div className={this.getClassName()}>
				<div className="card-inner">
					{this.props.children}
				</div>
			</div>
		);
	}

});

module.exports = Card;