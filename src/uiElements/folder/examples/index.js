var React = require('react');
var Section = require('section');
var Folder = require('../components/folder');

var FolderExamples = React.createClass({

	getComponents: function() {
		return [
			<Folder 
				folder={{
					text: "Maths",
					_color: "red",
					className: "maths-folder" 
				}}
				icon="tag"
				onClick={this.onClick}
			/>,
			<Folder 
				folder={{
					text: "English",
					_color: "blue",
					className: "english-folder" 
				}}
				icon="tag"
				onClick={this.onClick}
			/>
		]
	},

	onClick: function(folder) {
		console.log("this folder is", folder.text)
	},

	render: function() {
		return (
			<div>
				<Section
					title="Folders"
					components={this.getComponents()}
					shouldDisplayAsBlock={false}
				/>
			</div>
		);
	}

});

module.exports = FolderExamples;