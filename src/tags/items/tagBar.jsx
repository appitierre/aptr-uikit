var React = require('react');
var ActionBarTag = require('./actionBarTag.jsx');
var TagIcon = require('./tagIcon.jsx');
var ClearTag = require('./clearTag.jsx');
var CreateTag = require('./createTag.jsx');
var Tags = require('../app.jsx');

var Tags =  [
	{
		text: 'tag',
		color: 'grey',
		itemCount: 0
	},
	{
		text: 'tag',
		color: 'grey',
		itemCount: 1
	},
	{
		text: 'tag',
		color: 'grey',
		itemCount: 2
	}
]
	
var TagBar = React.createClass({

	getInitialState: function() {
		return {
			_tags: Tags
		}
	},

	getTags: function() { 	
		return _.map(this.state._tags, function(item, index) {
			return (
				<ActionBarTag item={item} key={index} onItemClicked={this.onItemClicked}/>
			)
		}, this);
	},

	onCreateClicked: function(item, index) {
		var newTag = {
			text: 'tab',
			color: 'grey',
			itemCount: 8 // Don't know how too increment count
		}
		
		this.state._tags.push(newTag)

		this.setState({
			_tags: this.state._tags
		})
	},

	onClearClicked: function(item) {		
		if (item._isOpen === true) {
			item._isOpen = false;
		}

		this.forceUpdate();
	},

	render: function() {	
	console.log(this.state._tags)
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