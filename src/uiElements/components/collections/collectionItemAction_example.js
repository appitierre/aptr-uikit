var React = require('react');
var Button = require('../buttons/button.js');

/*

This is an example of how what a collection action item should look like.
Here we pass in a few different types of standard buttons.  

*/ 

var CollectionItemAction = React.createClass({

	render: function() {	
		return (
			<div>
				<div className='collection-item-actions-buttons'>
					<Button icon="trash" text="Primary Button" className="primary" isSmall={true}/>
					<Button icon="trash" text="Alert Button" className="alert" isSmall={true}/>
					<Button icon="star" iconPosition="right" text="secondary" className="secondary" onClick={this.onClick} isSmall={true}/>
				</div>
			</div>
		);
	}

});

module.exports = CollectionItemAction;