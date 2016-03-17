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
                    <Button icon="star" text="Primary Button" className="primary"/>
                    <Button text="Secondary Button" className="secondary"/>
                    <Button text="Alert Button" className="alert"/>
                    <Button disabled={true} text="Disabled Button"/>
                    <Button text="Large Primary Button" className="primary large"/>
                </Section>

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