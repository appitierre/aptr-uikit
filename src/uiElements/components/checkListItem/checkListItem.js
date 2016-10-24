var React = require('react');
var classNames = require('classnames');

var CheckListItem = React.createClass({

    propTypes : {
        isChecked: React.PropTypes.bool.isRequired,
        onCheck: React.PropTypes.func.isRequired
    }, 

    onChange: function(event) {
        this.props.onCheck(event.target.checked);

    },

    getClassName: function() {
        return classNames('check-list-item', {
            "isChecked" : this.props.isChecked
        })
    },


    render: function() {
        return (
            <li className={this.getClassName()}>
                <div className="check-list-item-input">
                    <input type="checkbox" checked={this.props.isChecked} onChange={this.onChange}/>
                </div>                             
                <div className="check-list-item-content">
                    {this.props.children}
                </div>
            </li>
        );
    }

});

module.exports = CheckListItem;