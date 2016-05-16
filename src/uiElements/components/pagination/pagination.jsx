var React = require('react');
var Button = require('../buttons/button');

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
		return (
			<div className="pagination">
				<Button 
					className="pagination-previous-page" 
					type={this.props.buttonType}
					icon="arrow-left" 
					disabled={this.isPreviousDisabled()}
					onClick={this.props.onPreviousPageClicked}/>
				<div className="page-count">
					{this.getPageCount()}
				</div> 
				<Button 
					className="pagination-next-page"
					type={this.props.buttonType} 
					icon='arrow-right' 
					disabled={this.isNextDisabled()}
					onClick={this.props.onNextPageClicked}/>
			</div>
		);
	}

});

module.exports = Pagination;