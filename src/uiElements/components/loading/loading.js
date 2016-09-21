var React = require('react');
var classNames = require('classnames')

var Loading = React.createClass({

	getClassName: function() {
        return classNames('loading', this.props.className);
    },

    getComponent: function() {
    	if (this.props.hasDataLoaded) {
    		return this.props.children 		
    	} else if (this.props.hasDataError) {
    		return (
    			<div className="error-text-item">
    				<span className="error-text-content">
    					{this.props.errorText}
    				</span>
    				<i className="error-text-icon icon icon-warning"/>
    			</div>
    		)
    	} else {
    		return (
				<div className={this.getClassName()}>
					<div className="loading-inner">
						<div className="loading-icon">
							<div className="loading-icon-spinner">
							</div>
						</div>
						<div className="loading-text">
							{this.props.text}
						</div>
					</div>
				</div>
			);
    	}
    },

	render: function() {
		return this.getComponent();
	}

});

module.exports = Loading;