var React = require('react');
var Button = require('../buttons/button'); 

var DropDownOptions = React.createClass({


	getInitialState: function() {
		return {
			isDisplayingList: false
		}
	},
	
	getItems: function() {
		if (this.state.isDisplayingList === true) {	
			return _.map(this.props.options, function(item, key){
				return (
					<div className="drop-down-item">
						{item.text}
					</div>
				)
			})
		}
	},

	getButtonIcon: function() {
		if (this.state.isDisplayingList === false) {
			return 'chevron-down'
		} else {
			return 'chevron-up'
		}
	},

	getSelector: function() {
		return (
			<div className="drop-down-selector">
				<Button type="secondary" text="select" onClick={this.onSelectorClicked} icon={this.getButtonIcon()} iconPosition='right' />
			</div> 
		)
	},

	onSelectorClicked: function() {
		 var isDisplayingList = !this.state.isDisplayingList;
        
        this.setState({
            isDisplayingList: isDisplayingList
        });
	},

	render: function() {
		return (
			<div className="drop-down">
				{this.getSelector()}
				<div className="drop-down-item-container">	
					{this.getItems()}				
				</div>
			</div>
		);
	}

});

module.exports = DropDownOptions;