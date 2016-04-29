var React = require('react');

/* 

This is an example of how what a collection content item should look like.
Here you should always have a title and body. 

*/

var CollectionItemContent = React.createClass({

	render: function() {
		return (
			<div>
				<div className='collection-item-content-title'>
					<h2>
					{this.props.title}
					</h2>
				</div>
				<div className='collection-item-content-body'>
					{this.props.body}
				</div>
			</div>
		);
	}

});

module.exports = CollectionItemContent;