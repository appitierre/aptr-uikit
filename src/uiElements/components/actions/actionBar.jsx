var React = require('react');

var ActionBar = React.createClass({

	getClassName: function() {
		return 'action-bar' + ' ' + this.props.className;
	},

	render: function() {
		return (
			<div className={this.getClassName()}>
				<div className='action-bar-inner'>
					<div className='action-bar-actions'>
						{this.props.button}
						{this.props.search}
					</div>
				</div>
			</div>
		);
	}

});

module.exports = ActionBar;