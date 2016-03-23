var React = require('react');
var Section = require('./section.jsx');
var Button = require('./buttons/button.jsx');
var FlatButton = require('./buttons/flatButton.jsx');
var ActionButton = require('./buttons/actionButton.jsx');
var Card = require('./cards/card.jsx');
var RadioButton = require('./switches/radioButton.jsx');
var HorizontalNavigation = require('./navigation/horizontalNavigation.jsx');
var Form = require('./forms/form.jsx');
var DropDown = require('./dropDown/dropDown.jsx');

var Container = React.createClass({

    onClick: function() {
        console.log('clicked')
    },
    
    render: function() {
        return (
            <div>
                <Section 
                    title="Button"
                    description="A standard Button element usally only have an onClick event, along with some text and an icon.">

                    <Button icon="star" text="Primary Button" className="primary" onClick={this.onClick}/>
                    <Button icon="star" iconPosition="right" text="Secondary Button" className="secondary" onClick={this.onClick}/>
                    <Button icon="trash" text="Alert Button" className="alert" onClick={this.onClick}/>
                    <Button disabled={true} text="Disabled Button" onClick={this.onClick}/>
                    <Button text="Large Primary Button" className="primary large" onClick={this.onClick}/>

                </Section>

                <Section 
                    title="Button Action"
                    description="A Button Action is usually displayed for frequentley used actions. Generally a Button Action has no text, only an icon.">

                    <FlatButton className="primary article-item-buttons-edit-article " icon="pencil4" onClick={this.onClick}/>
                    <FlatButton className="alert" icon="trash" onClick={this.onClick}/>
                    <ActionButton className="help-button" icon="bubble-question" onClick={this.onClick}/>
                    <ActionButton className="profile-avatar" icon="profile" onClick={this.onClick}/>

                </Section>

                <Section 
                    title="Breadcrumbs"
                    description="A breadcrumb can be use to show heirachy between different sets of content.">

                    <HorizontalNavigation text="course" onClick={this.onClick} icon="chevron-right-circle"/>
                    <HorizontalNavigation text="page" onClick={this.onClick} icon="chevron-right-circle"/>
                    <HorizontalNavigation text="article" onClick={this.onClick} icon="chevron-right-circle"/>
                    <HorizontalNavigation text="block" onClick={this.onClick} icon="chevron-right-circle"/>


                </Section>                
                
                <Section 
                    title="Card"
                    description="Simalar to a playing card, a card displays different types of content usually containing a main image and certian types of text.">

                    <Card title="Title" body="" className="asset" onClick={this.onClick} image="css/images/emu.jpg"/>
                </Section>

                <Section 
                    title="Drop Down"
                    description="This component allows users to select different options and values from the drop down.">

                    <DropDown firstValue="" firstOption="ascending" secondValue="" secondOption="descending"/>
                </Section>                
                
                <Section 
                    title="Form"
                    description="Some description about the button">

                    <Form title="Item title" />
                </Section>

                <Section 
                    title="Switches"
                    description="Some description about the button">

                    <RadioButton icon="check" onClick={this.onClick} className="radio-button"/>
                </Section>


            </div>
        );
    }

});

module.exports = Container;