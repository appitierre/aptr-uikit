var React = require('react');

var ArticleNavigationHoverItem = React.createClass({	

	getItems: function(item) {
		if (this.props.item.isOpen === true) {
			console.log('is open is true')
			return (
				<div className='article-navigation-item-text'>
					{this.props.item.text}
				</div>
			)
		} else {
			console.log('failed')
		}
	},

	onMouseOver: function(item) {
		if (!this.props.item.isOpen) {
			console.log('pingg');
			this.props.item.isOpen = true
		} 
		
		this.forceUpdate();
	},

	onMouseLeave: function(item) {
		if (this.props.item.isOpen === true) {
			this.props.item.isOpen = false
		}
 
		this.forceUpdate();
	},

	render: function() {
	console.log('this item is now renderd')	
		return (
			<div>
				<div className='article-navigation-item' onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
				</div>
					{this.getItems()}
			</div>
		);
	}

});

module.exports = ArticleNavigationHoverItem;