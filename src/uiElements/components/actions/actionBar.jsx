var React = require('react');

var ActionBar = React.createClass({

	getClassName: function() {
		
		var className = 'action-bar';

		if (this.props.className) {
			className += ' ' + this.props.className;	
		}

		return className;

	},

	render: function() {
		return (
			<div className={this.getClassName()}>
				<div className='action-bar-inner'>
					<div className='action-bar-actions'>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}

});

module.exports = ActionBar;