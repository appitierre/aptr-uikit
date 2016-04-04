var React = require('react');
var ActionBarTag = require('./actionBarTag.jsx');
var TagIcon = require('./tagIcon.jsx');
var ClearTag = require('./clearTag.jsx');
var CreateTag = require('./createTag.jsx');
var Tags = require('../app.jsx');

var Tags =  [
	{
		text: 'tab',
		color: 'grey',
		itemCount: 0
	},
	{
		text: 'tab',
		color: 'grey',
		itemCount: 1
	},
	{
		text: 'tab',
		color: 'grey',
		itemCount: 2
	}
]
	
var TagBar = React.createClass({

	getTags: function() { 	
		return _.map(Tags, function(item, index) {
			return (
				<ActionBarTag item={item} key={index} onItemClicked={this.onItemClicked}/>
			)
		}, this)
	},

	onItemClicked: function(item) {	
		if (item._isOpen === false) {
			item._isOpen = true;
		} else {
			item._isOpen = true;
		}

		this.forceUpdate();
	},

	onCreateClicked: function() {
		var newTag = {
			text: 'tab',
			color: 'grey',
			itemCount: 4 // Don't know how too increment count
		}
		
		Tags.push(newTag)

		this.forceUpdate();
	},

	onClearClicked: function() {		
		var Tags = [];

		this.forceUpdate();

		console.log(Tags)
	},

	render: function() {
	console.log('rendered')		
		return (
			<div className="tag-bar-container">
				<div className="tag-bar-tags">
					{this.getTags()}
					<TagIcon />
				</div>
					
				<div className="tag-bar-actions">	
					<ClearTag onClick={this.onClearClicked} />
					<CreateTag onClick={this.onCreateClicked} />
				</div>
			</div>
		);
	},
});

module.exports = TagBar;