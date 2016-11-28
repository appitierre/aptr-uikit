var React = require('react');
var Button = require('../../buttons/components/button');
var NarrativeItem = require('./narrativeItem');

var Narrative = React.createClass({

	getInitialState: function() {
		return {
			width: null
		}
	},

	componentDidMount: function() {

		var width = this.refs['narrative'].clientWidth;
		var total = (width * this.props._items.length);

		this.setState({
			width: this.refs['narrative'].clientWidth,
			sliderWidth: (width * this.props._items.length)
		});

	},

	renderLeftControl: function() {

		if (this.props.stage > 0) {
			return (
				<Button 
					type="secondary"
					icon="arrow-left"
					onClick={this.onLeftControlClicked}
					className="narrative-slider-controls-left"
				/> 
			);
		} 

	},

	renderRightControl: function() {

		if (this.props.stage !== (this.props._items.length - 1)) {
			return (
				<Button 
					type="secondary"
					icon="arrow-right"
					onClick={this.onRightControlClicked}
					className="narrative-slider-controls-right"
				/>
			)
		}
	},

	renderItems: function() {
		
		return _.map(this.props._items, (item, index) => {
			var length = this.props._items.length;
			
			return (
				<NarrativeItem
					length={length}
					key={index} 
					item={item}
					stage={this.props.stage}
					width={this.state.width}
				/>
			)
		});
	},

	onRightControlClicked: function() {
		this.props.onChange(this.props.stage + 1);
	},

	onLeftControlClicked: function() {
		this.props.onChange(this.props.stage - 1);
	},

	render: function() {
	var minusInt = this.state.width * -1; 
		return (
			<div className="narrative" ref="narrative">
				{this.renderLeftControl()}
				<div className="narrative-slider" style={{width: this.state.sliderWidth + 'px', marginLeft: this.props.stage * minusInt}}>
					{this.renderItems()}
				</div>
				{this.renderRightControl()}
			</div>
		);
	}

});

module.exports = Narrative;