var React = require('react');

var DropDownOptions = React.createClass({

	getItems: function() {
		return _.map(this.props.options, function(item, index){
			return (
				<div className="drop-down-items">
					{item.text}
				</div>
			)
		})
	},

	render: function() {
		return (
			<div className="drop-down">
				<div className="drop-down-selector">
				</div>
				{this.getItems()}				
			</div>
		);
	}

});

module.exports = DropDownOptions;