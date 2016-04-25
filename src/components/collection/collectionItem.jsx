var React = require('react');

/*

PROPS:
- ClassName: String
- actionsComponent: Component (collectionItemAction_example.jsx)
- contentComponent: Component (collectionItemContent_example.jsx)

*/

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