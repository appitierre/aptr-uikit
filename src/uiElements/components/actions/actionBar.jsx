var React = require('react');

var ActionBar = React.createClass({

	getClassName: function() {
		return 'action-bar' + ' ' + this.props.className;
	},

	render: function() {
		return (
			<div className={this.getClassName()}>
				<div className='action-bar-inner'>
					{this.props.children}
				</div>
			</div>
		);
	}

});

module.exports = ActionBar;