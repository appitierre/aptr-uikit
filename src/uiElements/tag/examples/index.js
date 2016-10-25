var React = require('react');
var Section = require('section');
var Tag = require('../components/tag');

var TagExamples = React.createClass({

	getComponents: function() {
		return [
			<Tag 
				text="Chemistry" 
   				tagColor="red" 
    			hasCloseButton={true}
    		/>,
    		<Tag 
				text="Biology" 
   				tagColor="green" 
    			hasCloseButton={false}
    		/>
		]
	},

	render: function() {
		return (
			<div>
				<Section
					title="Tag"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = TagExamples;