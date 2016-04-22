var React = require('react');

var PlainButton = React.createClass({

	render: function() {
	console.log('plain button rendered')
		return (
			<div>
				<button className='button'>
					<i className={this.props.iconClassName}/>
				</button>
			</div>
		);
	}

});

module.exports = PlainButton;