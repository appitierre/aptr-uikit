var React = require('react');
var classNames = require('classnames')

var Loading = React.createClass({

	getAccessibilityTags: function() {
		return {"role": "alert"}
	},


	getClassName: function() {
        return classNames('loading', this.props.className);
    },

    getComponent: function() {
    	if (this.props.hasDataLoaded) {
    		return this.props.children 		
    	} else {
    		return (
				<div className={this.getClassName()} {...this.getAccessibilityTags()}>
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