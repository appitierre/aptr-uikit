var React = require('react');
var _ = require('lodash');

// @PROPS
// {
//     title: String,
//     description: String,
//     children: React Components
// }


var Section = React.createClass({

    renderComponents: function() {
        return _.map(this.props.components, (component, index) => {
            var TagName = "span";
            
            if (this.props.shouldDisplayAsBlock) {
                TagName = "div";
            }

            return (
                <TagName className="section-item" key={index}>
                    {component}
                </TagName>
            );

        });
    },

    render: function() {
        return (
            <section className={this.props.className + " clearfix"}>
                <div className="col-1-1">
                    <h2>{this.props.title}</h2>
                    <div>{this.props.description}</div>
                </div>
                <div className="col-1-2">
                    {this.renderComponents()}
                </div>
            </section>
        );
    }

});

module.exports = Section;