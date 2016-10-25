'use strict';

var React = require('react');
var Button = require('../../buttons/components/button.js');

/*

This is an example of how what a collection action item should look like.
Here we pass in a few different types of standard buttons.  

*/

var CollectionItemAction = React.createClass({
	displayName: 'CollectionItemAction',


	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: 'collection-item-actions-buttons' },
				React.createElement(Button, { icon: 'trash', text: 'Primary Button', className: 'primary', isSmall: true }),
				React.createElement(Button, { icon: 'trash', text: 'Alert Button', className: 'alert', isSmall: true }),
				React.createElement(Button, { icon: 'star', iconPosition: 'right', text: 'secondary', className: 'secondary', onClick: this.onClick, isSmall: true })
			)
		);
	}

});

module.exports = CollectionItemAction;