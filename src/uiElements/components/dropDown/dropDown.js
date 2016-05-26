var React = require('react');
var Button = require('../buttons/button');

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
            <div className="drop-down">
                <Button onClick={this.onDropDownClicked} icon={this.props.icon} text={this.props.text}/>
                {this.getContent()}
            </div>
        );
    }

});

module.exports = DropDown;