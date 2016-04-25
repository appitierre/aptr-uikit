var React = require('react');

/*
PROPS
{
    title: String,
    description: String,
    children: React Components
}
*/

var Section = React.createClass({

    render: function() {
        return (
            <section className={this.props.className + " clearfix"}>
                <div className="col-1-1">
                    <h2>{this.props.title}</h2>
                    <div>{this.props.description}</div>
                </div>
                <div className="col-1-2">
                    {this.props.children}
                </div>
            </section>
        );
    }

});

module.exports = Section;