var React = require('react');

/* 

@props:
    icon: String
    text: String
    className: String - primary, secondary and alert
    onClick: Function, Required
    iconPosition: String 
    disabled: Boolean

*/

var Button = React.createClass({

    getButtonClassName: function() {
        var className = 'button';
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return className;
    },

    getIconPositionClassName: function(position) {
        return 'button-icon-position-' + position + ' ' + this.getIconClassName()
    },

    getIconClassName: function() {
        return 'icon icon-' + this.props.icon;
    },

    getLeftIcon: function() {
        if (this.props.icon) {
            if (this.props.iconPosition === 'left' || !this.props.iconPosition) {
                if (!this.props.text) {
                    return (
                        <i className={this.getIconClassName()}> </i>
                    );
                }
                return (
                    <i className={this.getIconPositionClassName('left')}> </i>
                );
            }
        }
    },

    getRightIcon: function() {
        if (this.props.icon && this.props.iconPosition === 'right') {
            return (
                <i className={this.getIconPositionClassName(this.props.iconPosition)}> </i>
            );
        }
    },    

    render: function() {
        return (
            <button disabled={this.props.disabled} className={this.getButtonClassName()} onClick={this.props.onClick}>
                {this.getLeftIcon()}
                {this.props.text}
                {this.getRightIcon()}
            </button>
        );
    }

});

module.exports = Button;