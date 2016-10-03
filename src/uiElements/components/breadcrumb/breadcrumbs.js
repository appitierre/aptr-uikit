var React = require('react');
var BreadCrumb = require('./breadcrumb');

var BreadCrumbs = React.createClass({

    /*renderBreadCrumbs: function() {
        return this.props.breadcrumbs.map((location, index) => {
            return (
                <BreadCrumb
                    key={index}
                    isCurrentLocation={index === (this.props.breadcrumbs.length - 1)} 
                    location={location}/>
            )
        });
    },*/

    renderBreadCrumbs: function() {
        var length = this.props.breadcrumbs.length;

        return _.map(this.props.breadcrumbs, function(location, index) {   
            return (
                <BreadCrumb
                    key={index}
                    isCurrentLocation={index === (length - 1)} 
                    location={location}/>
            )
        }, this)

    },

    render: function() {
        return (
            <div className="breadcrumbs">
                <ul className="breadcrumbs-inner">
                    {this.renderBreadCrumbs()}
                </ul>
            </div>
        );

    }

})

module.exports = BreadCrumbs;