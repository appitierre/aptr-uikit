'use strict';

var React = require('react');
var NarrativeGalleryItem = require('./narrativeGalleryItem');
var Button = require('../../buttons/components/button');

var NarrativeGallery = React.createClass({
	displayName: 'NarrativeGallery',


	renderItems: function renderItems() {
		var _this = this;

		return _.map(this.props.items, function (item, index) {
			var length = _this.props.items.length;

			return React.createElement(NarrativeGalleryItem, {
				key: index,
				item: item,
				stage: _this.props.stage,
				width: _this.props.narrativeWidth
			});
		});
	},

	renderLeftControl: function renderLeftControl() {

		if (this.props.stage > 0) {
			return React.createElement(Button, {
				type: 'secondary',
				icon: 'arrow-left',
				onClick: this.onLeftControlClicked,
				className: 'narrative-slider-controls-left'
			});
		}
	},

	renderRightControl: function renderRightControl() {

		if (this.props.stage !== this.props.items.length - 1) {
			return React.createElement(Button, {
				type: 'secondary',
				icon: 'arrow-right',
				onClick: this.onRightControlClicked,
				className: 'narrative-slider-controls-right'
			});
		}
	},

	onRightControlClicked: function onRightControlClicked() {
		this.props.onChange(this.props.stage + 1);
	},

	onLeftControlClicked: function onLeftControlClicked() {
		this.props.onChange(this.props.stage - 1);
	},

	render: function render() {
		var minusInt = this.props.narrativeWidth * -1;

		return React.createElement(
			'div',
			{ className: 'narrative-gallery' },
			this.renderLeftControl(),
			React.createElement(
				'div',
				{ className: 'narrative-slider', style: { width: this.props.sliderWidth + 'px', marginLeft: this.props.stage * minusInt } },
				this.renderItems()
			),
			this.renderRightControl()
		);
	}

});

module.exports = NarrativeGallery;