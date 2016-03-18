var React = require('react');
var Section = require('./section.jsx');
var Button = require('./buttons/button.jsx');

var Container = React.createClass({

    onClick: function() {
        console.log('clicked')
    },
    
    render: function() {
        return (
            <div>
                <Section 
                    title="Button"
                    description="Some description about the button">

                    <Button icon="star" text="Primary Button" className="primary" onClick={this.onClick}/>
                    <Button icon="star" iconPosition="right" text="Secondary Button" className="secondary" onClick={this.onClick}/>
                    <Button text="Alert Button" className="alert" onClick={this.onClick}/>
                    <Button disabled={true} text="Disabled Button" onClick={this.onClick}/>
                    <Button text="Large Primary Button" className="primary large" onClick={this.onClick}/>

                </Section>

                <Section 
                    title="Button Action"
                    description="Some description about the button">

                    <Button text="button text"/>
                    <Button disabled={true} text="button text"/>

                </Section>
            </div>
        );
    }

});

module.exports = Container;