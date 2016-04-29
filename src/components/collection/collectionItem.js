var React = require('react');



// @PROPS:
// 	className: String,
// 	contentComponent: Component (collectionItemContent_example.jsx), required
// 	actionsComponent: Component (collectionItemAction_example.jsx)

// For a collection item it is important you have a content component.



var CollectionItem = React.createClass({

	getClassName: function() {
		if (this.props.className) {
			return 'collection-item ' + this.props.className;
		} else {
			return 'collection-item';
		}
	},

	getActions: function() {
		if (this.props.actionsComponent) {
			return (
				<div className="collection-item-actions">
					{this.props.actionsComponent}
				</div>
			)
		}
	},

	render: function() {
		return (
			<div className={this.getClassName()}>
				<div className='collection-item-content'>
					{this.props.contentComponent}
				</div>
					{this.getActions()}
			</div>
		);
	}

});

module.exports = CollectionItem;