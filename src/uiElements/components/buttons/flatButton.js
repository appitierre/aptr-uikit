var React = require('react');

//## Flat Button

// @PROPS:
// ClassName: String,
// Icon: String,
// onClick: Function, 

var FlatButton = React.createClass({

	getInitialState: function() {
        return {
            toolTipPosition: 0
        }
    },

	//The flat button component has a set className of button and what ever className has been passed
    //in will be added on too the end.
	getButtonClassName: function() {
		var className = 'button-flat';
        if (this.props.type) {
            className += " " + this.props.type;
        } 
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return className;
	},

	//Similar to the button className function, this takes in an icon prop. Make sure that the icon you pass in is
    //part of the linear icon pack.
	getIcon: function() {
		return (
			<i className={' icon icon-' + this.props.icon} style={this.getStyle()}></i>
		)
	},

	getText: function() {
		if (this.props.text) {	
			return (
				<span className="flat-button-text">	
					{this.props.text}
				</span>
			)
		}
	},

	getStyle: function() {
		if (this.props.text && this.props.icon) {
			return ({
				marginRight: 5
			})
		}
	},

	getTopToolTip: function() {
		if (this.props.toolTip) {
			if (this.props.toolTipPosition === 'top' || !this.props.toolTipPosition) {
				return (
					<span style={{marginLeft: this.state.toolTipPosition}} ref="tool-tip" className="tool-tip tool-tip-top">
                        {this.props.toolTip}
                    </span>
				)
			}
		}
	},

	getBottomToolTip: function() {
		if (this.props.toolTip) {
			if (this.props.toolTipPosition === 'bottom') {
				return (
					<span style={{marginLeft: this.state.toolTipPosition}} ref="tool-tip" className="tool-tip tool-tip-bottom">
                        {this.props.toolTip}
                    </span>
				)
			}
		}
	},

	onButtonMouseOver: function() {
        if (this.refs['tool-tip']) {
            var width = this.refs['tool-tip'].offsetWidth;
            this.setState({
                toolTipPosition: -Math.floor(width/2) + 'px'
            })
        }
    },

	//Renders the entire flat button.
	render: function() {
		return (
			<button onMouseOver={this.onButtonMouseOver} className={this.getButtonClassName()} onClick={this.props.onClick}>
				{this.getTopToolTip()}
					{this.getIcon()}
					{this.getText()}
				{this.getBottomToolTip()}				
			</button>
		);
	}

});

module.exports = FlatButton;