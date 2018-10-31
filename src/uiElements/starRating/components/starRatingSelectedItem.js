var React = require('react');
var FlatButton = require('../../buttons/components/flatButton');
var classnames = require('classnames');

var StarRatingSelectedItem = React.createClass({

	onButtonClick: function() {
		
		this.props.onClick(this.props.itemNumber);
		
	},

	onMouseEnter: function() {
		
		if (this.props.isDisabled) {
			return;
		}

		this.props.onHover(this.props.itemNumber);

	},

	onMouseLeave: function() {
		
		if (this.props.isDisabled) {
			return;
		}

		this.props.onHover(null);

	},

	onClick: function(e) {
		if ((e.type === 'click' && e.clientX !== 0 && e.clientY !== 0)) {
			this.onButtonClick();
		}
	},

	onKeyPress: function(e) {
		if (e.which === 13 || e.which === 32) {
			this.onButtonClick();
		}
	},

	render: function() {
		return (
			
			<div className={classnames('star-rating-item', { 
				'is-selected': this.props.isSelected,
				'is-active': this.props.isActive,
				'is-disabled': this.props.isDisabled
			})} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
				<input
					id={`star-${this.props.itemNumber}`}
					name="star-rating" 
					type="radio"
					onChange={this.onMouseEnter}
					onBlur={this.onMouseLeave}
					onKeyPress={this.onKeyPress}
					onClick={this.onClick}
					checked={this.props.isSelected}
					disabled={this.props.isDisabled}
					/>
				<label htmlFor={`star-${this.props.itemNumber}`}>
					<span className="star-rating-label-text">{this.props.label}</span>
					<i className={'icon icon-' + this.props.icon}/>
				</label>
			</div>
		);
	}

});

module.exports = StarRatingSelectedItem;