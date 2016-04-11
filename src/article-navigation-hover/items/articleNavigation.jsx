var React = require('react');
var ArticleNavigationHoverItem = require('./articleNavigationHoverItem.jsx')

var items = [
	{
		text: 'Article Display title' 	
	},
	{
		text: 'Component Display title' 	
	},
	{
		text: 'Block Display title' 	
	},
	{
		text: 'Extra extra Display title' 	
	},
]

var ArticleNavigation = React.createClass({

	getInitialState: function() {
		return {
			items: items 
		}
	},

	getItems: function() {
		return _.map(this.state.items, function(item, index) {
			return (
				<ArticleNavigationHoverItem item={item} key={index} />
			)
		}, this);
	},

	render: function() {
	console.log('rendered')	
		return (
			<div>
				{this.getItems()}
			</div>
		);
	}
});

module.exports = ArticleNavigation;