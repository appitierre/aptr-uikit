var React = require('react');
var Router = require('react-router').Router;
var Link = require('react-router').Link;

var BreadCrumb = React.createClass({

    renderDividerIcon: function() {
        //TODO - Use an actual icon?
        if(!this.props.isCurrentLocation) {
            return (
                <span className="breadcrumb-divider-icon"> ></span>
            )
        }
    },

    renderBreadcrumb: function() {
        if(!this.props.location.path) {
            return (
                <span>
                    {this.props.location.text}
                </span>
            );
        }

        return (
            <Link to={this.props.location.path}>
                {this.props.location.text}
            </Link>
        );
    },


    render: function() {
        return (
            <li className="breadcrumb">
                <div className="breadcrumb-inner">
                    {this.renderBreadcrumb()}
                    {this.renderDividerIcon()}
                </div>
            </li>
        )
    }

});

module.exports = BreadCrumb;