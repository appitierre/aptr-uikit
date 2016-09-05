var React = require('react');
var Button = require('../buttons/button');
var classNames = require('classnames')

var DropDown = React.createClass({

    getInitialState: function() {
        return {
            _isOpen: false
        }
    },

    propTypes: {
        icon: React.PropTypes.string,
        text: React.PropTypes.string,
        className: React.PropTypes.string,
        component: React.PropTypes.element.isRequired
    },

    getContent: function() {

        if (this.state._isOpen) {
            return (
                <div className="drop-down-content">
                    {React.cloneElement(this.props.component, {
                        closeDropDown: this.closeDropDown
                    })}
                </div>
            );
        }

    },

    getClassName: function() {
        return classNames('drop-down', this.props.className);
    },

    onDropDownClicked: function(event) {
        if (event) {
            event.preventDefault();
        }
        this.setState({
            _isOpen: !this.state._isOpen
        })
    },

    closeDropDown: function() {
        this.setState({
            _isOpen: false
        });
    },

    render: function() {
        return (
            <div className={this.getClassName()}>
                <Button onClick={this.onDropDownClicked} icon={this.props.icon} text={this.props.text}/>
                {this.getContent()}
            </div>
        );
    }

});

module.exports = DropDown;