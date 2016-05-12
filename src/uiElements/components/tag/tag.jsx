var React = require('react');

var Tag = React.createClass({

	getStyle: function() {
		if (this.props.tagColor) {
			return ({
				 color: this.props.tagColor 
			})
		}
	},

	getCloseButton: function() {
		if (this.props.hasCloseButton === true) {
			return (
				<button className="tag-item-remove">
					<i className="icon icon-cross">
					</i>
				</button>
			)
		}
	},

	render: function() {
		return (
			<div className="tag-item">
				<i className="icon icon-tag tag-item-icon" style={this.getStyle()}/>
				<span>
					{this.props.text}
				</span>
				{this.getCloseButton()}
			</div>
		);
	}

});

module.exports = Tag;