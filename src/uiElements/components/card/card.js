var React = require('react');
var classNames = require('classnames')

var Card = React.createClass({

	propTypes: {
		className: React.PropTypes.string
	},

	getClassName: function() {
		return classNames('card', this.props.className)
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