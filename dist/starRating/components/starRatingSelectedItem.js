'use strict';

var React = require('react');
var FlatButton = require('../../buttons/components/flatButton');

var StarRatingSelectedItem = React.createClass({
	displayName: 'StarRatingSelectedItem',


	onButtonClick: function onButtonClick() {

		this.props.onClick(this.props.itemNumber);
	},

	onMouseEnter: function onMouseEnter() {

		if (this.props.isDisabled) {
			return;
		}

		this.props.onHover(this.props.itemNumber);
	},

	onMouseLeave: function onMouseLeave() {

		if (this.props.isDisabled) {
			return;
		}

		this.props.onHover(null);
	},

	getContent: function getContent() {
		this.getInput();
		this.getLabel();
	},

	getInput: function getInput() {
		return React.createElement('input', {
			type: "radio", 
			value: this.props.itemNumber, 
			name: "rating", 
			id:`rate${this.props.itemNumber}`, 
			selected: this.onButtonClick})
	},

	getLabel: function getLabel() {
		var icon = React.createElement('i', { className: ' icon icon-' + this.props.icon });
		return React.createElement('label', {htmlFor: `rate${this.props.itemNumber}`, onClick: this.onButtonClick, className: this.props.disabled ? "is-disabled" : ""}, icon)
	},

	render: function render() {
		return (
			React.createElement('div')
		)
	}

});

module.exports = StarRatingSelectedItem;