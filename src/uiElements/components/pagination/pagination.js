var React = require('react');
var Button = require('../buttons/button');
var classNames = require('classnames');

// @props:
// {
//    	buttonType: string
//    	onPreviousPageClicked: function
//    	onNextPageClicked: function
//		currentPage: value
//		totalPages: value
//	}

var Pagination = React.createClass({

	getPageCount: function() {
		var currentPage = this.props.currentPage;
		var totalPages = this.props.totalPages;

		return (
			currentPage + '/' + totalPages
		)

	},

	getClassName: function() {
		if (this.props.isSmall) {
			return classNames('pagination', this.props.className, 'is-small');
		} else {
			return classNames('pagination', this.props.className);
		}
	},

	renderToolTipLeft: function() {
		if (this.props.toolTipLeftButton) {
			return this.props.toolTipLeftButton
		}
	},

	renderToolTipLeftPosition: function() {
		if (this.props.toolTipLeftButtonPosition) {
			return this.props.toolTipLeftButtonPosition
		}
	},

	renderToolTipRight: function() {
		if (this.props.toolTipRightButton) {
			return this.props.toolTipRightButton
		}
	},

	renderToolTipRightPosition: function() {
		if (this.props.toolTipRightButtonPosition) {
			return this.props.toolTipRightButtonPosition
		}
	},

	isPreviousDisabled: function() {
		if (this.props.currentPage === 1) {
			return true;
		} else {
			return false;
		}
	},

	isNextDisabled: function() {
		if (this.props.currentPage === this.props.totalPages) {
			return true; 
		} else {
			return false;
		}
	},

	render: function() {
		var Height = false;

		if (this.props.isSmall === true) {
			var Height = true;
		}

		return (
			<div className={this.getClassName()}>
				<Button 
					className="pagination-previous-page" 
					type={this.props.buttonType}
					icon="arrow-left" 
					disabled={this.isPreviousDisabled()}
					onClick={this.props.onPreviousPageClicked}
					toolTip={this.renderToolTipLeft()}
					toolTipPosition={this.renderToolTipLeftPosition()}
					isSmall={Height} />

				<div className="page-count">
					{this.getPageCount()}
				</div>
				 
				<Button 
					className="pagination-next-page"
					type={this.props.buttonType} 
					icon='arrow-right' 
					disabled={this.isNextDisabled()}
					onClick={this.props.onNextPageClicked}
					toolTip={this.renderToolTipRight()}	
					toolTipPosition={this.renderToolTipRightPosition()}
					isSmall={Height} />
			</div>
		);
	}

});

module.exports = Pagination;