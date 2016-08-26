var React = require('react');
var classNames = require('classnames');

var Tag = React.createClass({

	propTypes: {
		tagColor: React.PropTypes.string,
		className: React.PropTypes.string,
		hasCloseButton: React.PropTypes.bool,
		text: React.PropTypes.string
	},

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

	getClassName: function() {
		return classNames('tag-item', this.props.className);
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