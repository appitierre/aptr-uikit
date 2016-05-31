var React = require('react');
var Button = require('../buttons/button');
var classNames = require('classnames')

var DropDown = React.createClass({

    getInitialState: function() {
        return {
            _isOpen: false
        }
    },

    getContent: function() {

        if (this.state._isOpen) {
            return (
                <div className="drop-down-content">
                    {this.props.component}
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