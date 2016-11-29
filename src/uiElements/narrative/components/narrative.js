var React = require('react');
var Button = require('../../buttons/components/button');
var NarrativeGallery = require('./narrativeGallery');
var NarrativeIndicators = require('./narrativeIndicators');
var NarrativeContent = require('./narrativeContent');

var Narrative = React.createClass({

	getInitialState: function() {
		return {
			narrativeWidth: 0,
			sliderWidth: 0
		}
	},

	componentDidMount: function() {
		var narrativeWidth = this.refs['narrative'].clientWidth;
		var sliderWidth = narrativeWidth * this.props.items.length

		this.setState({
			narrativeWidth: narrativeWidth,
			sliderWidth: sliderWidth
		});
	},

	renderNarrativeGallery: function() {

		return (
			<NarrativeGallery 
				narrativeWidth={this.state.narrativeWidth}
				sliderWidth={this.state.sliderWidth}
				{...this.props}
				onRightControlClicked={this.onRightControlClicked}
				onLeftControlClicked={this.onLeftControlClicked}
			/>
		);
	},

	renderNarrativeIndicators: function() {

		return (
			<NarrativeIndicators 
				stage={this.props.stage}
				length={this.props.items.length}
			/>
		)
	},

	renderNarrativeContent: function() {

		return _.map(this.props.items, (item, index) => {
			if (index === this.props.stage) {
				return (
					<NarrativeContent
						item={item}
						key={index}
					/>
				)
			}
		})
	},	

	onRightControlClicked: function() {
		this.props.onChange(this.props.stage + 1);
	},

	onLeftControlClicked: function() {
		this.props.onChange(this.props.stage - 1);
	},

	render: function() {
		return (
			<div className="narrative" ref="narrative">
				{this.renderNarrativeGallery()}
				{this.renderNarrativeIndicators()}
				{this.renderNarrativeContent()}
			</div> 
		);
	}

});

module.exports = Narrative;