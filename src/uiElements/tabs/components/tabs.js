var React = require('react');
var classnames = require('classnames');
var FlatButton = require('../../buttons/components/flatButton');

/*
Props
items: {
    icon: String,
    label: String,
    component: ReactComponent
}
value: String - Selected label
onChange: Function - passes back the changed value/label
*/

var Tabs = React.createClass({

    getLabels: function() {
        return _.map(this.props.items, (item) => {
            
            var className = classnames('tabs-label', {
                'selected': (this.props.value === item.value)
            });

            return (
                <FlatButton 
                    key={item.label} 
                    className={className} 
                    onClick={(event) => {
                        event.preventDefault()
                        this.props.onChange(item.value);
                    }}
                    text={item.label}
                    icon={item.icon}
                />
            );
        })
    },

    getContent: function() {
        if (!this.props.value) {
            console.warn('A value needs to be passed into a tabs component');
        } else {
            return _.find(this.props.items, {value: this.props.value}).component;
        }
    },

    render: function() {
        return (
            <div className="tabs">
                <div className="tabs-labels">
                    <div className="tabs-labels-inner">
                    {this.getLabels()}
                    </div>
                </div>
                <div className="tabs-contents">
                    {this.getContent()}
                </div>
            </div>
        );
    }

});

module.exports = Tabs;