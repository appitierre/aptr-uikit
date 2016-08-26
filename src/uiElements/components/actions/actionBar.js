var React = require('react');
var classNames = require('classnames');

var ActionBar = React.createClass({

	propTypes: {
		className: React.PropTypes.string
	},

	getClassName: function() {
        return classNames('action-bar', this.props.className);
    },

	render: function() {
		return (
			<div className={this.getClassName()}>
				<div className='action-bar-inner clearfix'>
					{this.props.children}
				</div>
			</div>
		);
	}

});

module.exports = ActionBar;