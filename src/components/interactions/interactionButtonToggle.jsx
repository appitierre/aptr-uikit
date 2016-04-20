var React = require('react');

var InteractionButtonToggle = React.createClass({

	getInitialState: function() {
		return {
			isSelected: true
		}
	},

	getIconPositionClassName: function(position) {
        return position + ' icon icon-' + this.props.icon;
    },

    getAltIconPositionClassName: function(position) {
        return position + ' icon icon-' + this.props.altIcon;
    },

    getIcon: function(position) {
    	if (this.props.icon && this.props.iconPosition === position && this.state.isSelected === false) {
            return (
                <i className={this.getIconPositionClassName(position)}> </i>
            )
        } else if (this.state.isSelected === true) {
        	return null
        }   
    },

    getAltIcon: function(position) {
    	if (this.props.icon && this.props.iconPosition === position && this.state.isSelected === true ) {
    		return (
    			<i className={this.getAltIconPositionClassName(position)}> </i>
    		)
    	}
    },

    getText: function() {
    	if (this.state.isSelected === false) {
    		return (
    			<span>
    				{this.props.text}
    			</span>
    		)
    	} else {
    		return (
    			<span>
    				{this.props.altText}
    			</span>
    		)
    	}
    },

    getClassName: function() {
    	if (this.state.isSelected === true) {
    		return 'button secondary ' + this.props.className
    	} else {
    		return 'button primary ' + this.props.className 
    	}
    },

    onClick: function() {
    	if (this.state.isSelected === false) {
	    	this.setState({
	    		isSelected: true
	    	})
	    } else {
	    	this.setState({
	    		isSelected: false
	    	})
	    } 
    },

	render: function() {	
		return (
			<button onClick={this.onClick} className={this.getClassName()}>
				{this.getIcon('left')}
				{this.getAltIcon('left')}
				{this.getText()}
				{this.getAltIcon('right')}
				{this.getIcon('right')}
			</button>
		);
	}

});

/*InteractionButtonToggle
InteractionSlider
InteractionCheckbox
InteractionRadio*/

module.exports = InteractionButtonToggle;