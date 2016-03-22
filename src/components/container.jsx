var React = require('react');
var Section = require('./section.jsx');
var Button = require('./buttons/button.jsx');
var FlatButton = require('./buttons/flatButton.jsx');
var ActionButton = require('./buttons/actionButton.jsx');
var Card = require('./cards/card.jsx');
var RadioButton = require('./switches/radioButton.jsx')

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
                    <Button icon="trash" text="Alert Button" className="alert" onClick={this.onClick}/>
                    <Button disabled={true} text="Disabled Button" onClick={this.onClick}/>
                    <Button text="Large Primary Button" className="primary large" onClick={this.onClick}/>

                </Section>

                <Section 
                    title="Button Action"
                    description="Some description about the button">

                    <FlatButton className="primary article-item-buttons-edit-article " icon="pencil4" onClick={this.onClick}/>
                    <FlatButton className="alert" icon="trash" onClick={this.onClick}/>
                    <ActionButton className="help-button" icon="bubble-question" onClick={this.onClick}/>
                    <ActionButton className="profile-avatar" icon="profile" onClick={this.onClick}/>

                </Section>

                <Section 
                    title="Card"
                    description="Some description about the button">

                    <Card title="Title" body="" className="asset" onClick={this.onClick} image="css/images/emu.jpg"/>
                </Section>

                <Section 
                    title="Switches"
                    description="Some description about the button">

                    <RadioButton icon="check" onClick={this.onClick} className="radio-button"/>
                </Section>

                <Section 
                    title="Tabs"
                    description="Some description about the button">

                </Section>                
            </div>
        );
    }

});

module.exports = Container;