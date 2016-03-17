var React = require('react');
var Section = require('./section.jsx');
var Button = require('./buttons/button.jsx');

var Container = React.createClass({

    render: function() {
        return (
            <div>
                <Section 
                    title="Button"
                    description="Some description about the button">
                    <Button text="button text"/>
                    <Button disabled={true} text="button text"/>
                </Section>
            </div>
        );
    }

});

module.exports = Container;