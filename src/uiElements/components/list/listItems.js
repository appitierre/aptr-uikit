var React = require('react');
var classNames = require('classnames');

var ListItems = React.createClass({
	propTypes: {
		shouldShowAlternativeColors: React.PropTypes.bool,
		className: React.PropTypes.string,
		items: React.PropTypes.arrayOf(React.PropTypes.element)
	},

	getClassName: function() {
		return classNames('list-items', this.shouldShowAlternativeColors(), this.props.className);
	},

	shouldShowAlternativeColors: function() {
		if (this.props.shouldShowAlternativeColors === true) {
			return " list-items-alternative-colors"; 
		}
	},

	render: function() {
		return (
			<ul className={this.getClassName()}>
				{this.props.items}
			</ul>
		);
	}

});

module.exports = ListItems;