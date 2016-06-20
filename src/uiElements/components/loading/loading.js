var React = require('react');
var classNames = require('classnames')

var Loading = React.createClass({

	getClassName: function() {
        return classNames('loading', this.props.className);
    },

    getComponent: function() {
    	if (this.props.hasDataLoaded) {
    		return ( 
    			<div>	
    				{this.props.children}
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