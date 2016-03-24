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
var Toggle = require('./switches/toggle.jsx');
var ActionBarTag = require('./tags/actionBarTag.jsx');
var ItemTag = require('./tags/itemTag.jsx');
var NavigationToolbar = require('./navigation/navigationToolbar.jsx');
var List = require('./lists/list.jsx')

var Container = React.createClass({

    onClick: function() {
        console.log('clicked')
    },
    
    render: function() {
        return (
            <div>
                <Section 
                    title="Button"
                    description="A standard Button element usally only has an onClick event, along with some text and an icon. Here are all of buttons in Evolve!">

                    <Button icon="star" text="Primary Button" className="primary" onClick={this.onClick}/>
                    <Button icon="star" iconPosition="right" text="Secondary Button" className="secondary" onClick={this.onClick}/>
                    <Button icon="trash" text="Alert Button" className="alert" onClick={this.onClick}/>
                    <Button disabled={true} text="Disabled Button" onClick={this.onClick}/>
                    <Button text="Large Primary Button" className="primary large" onClick={this.onClick}/>

                </Section>

                <Section 
                    title="Button Action"
                    description="A Button Action is usually displayed for frequentley used actions. Generally a Button Action has no text, only an icon.">

                <div className="primary-flat-buttons">    
                    <FlatButton className="primary article-item-buttons-edit-article " icon="pencil4" onClick={this.onClick}/>
                    <FlatButton className="primary article-item-buttons-move-article-down " icon="exit-down2" onClick={this.onClick}/>
                    <FlatButton className="primary article-item-buttons-add-article-divider " icon="picture2" onClick={this.onClick}/>
                    <FlatButton className="primary article-item-buttons-paste-article " icon="paste" onClick={this.onClick}/>
                </div>

                <div className="floating-action-buttons">    
                    <ActionButton className="action help-button" icon="bubble-question" onClick={this.onClick}/>
                    <ActionButton className="action profile-avatar" icon="profile" onClick={this.onClick}/>
                </div>

                  <FlatButton className="alert" icon="trash" onClick={this.onClick}/>                 
                </Section>

                <Section 
                    title="Breadcrumbs"
                    description="A breadcrumb can be use to show heirachy between different sets of content.">

                <div className="breadcrumbs-container">
                    <HorizontalNavigation text="course" onClick={this.onClick} icon="chevron-right-circle"/>
                    <HorizontalNavigation text="page" onClick={this.onClick} icon="chevron-right-circle"/>
                    <HorizontalNavigation text="article" onClick={this.onClick} icon="chevron-right-circle"/>
                    <HorizontalNavigation text="block" onClick={this.onClick} icon="chevron-right-circle"/>
                </div>

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
                    description="A form displays a set of related user input fields in a structured way">

                    <Form title="Item title" />
                </Section>

                <Section 
                    title="List"
                    description="A form displays a set of related user input fields in a structured way">

                    <List title="Title" body="This is the body of the text oh yes, yes it certainly is" onClick={this.onClick} iconLeft="book2" iconRight="chevron-right-circle" className="dashboard-item-list-item"/>
                    <List title="Title" body="This is the body of the text oh yes, yes it certainly is" onClick={this.onClick} iconLeft="book2" iconRight="chevron-right-circle" className="dashboard-item-list-item"/>

                </Section>

                <Section    
                    title="Navigation Toolbar"
                    description="Some description about the button">

                <div className="navigation">
                    <NavigationToolbar item="Dashboard" className="navigation-item" isSelected={false} onClick={this.onClick}/>
                    <NavigationToolbar item="Course" className="navigation-item" isSelected={true} onClick={this.onClick}/>
                    <NavigationToolbar item="Assets" className="navigation-item" isSelected={false} onClick={this.onClick}/>
                </div>
                
                </Section>

                <Section 
                    title="Switches"
                    description="Some description about the button">

                    <RadioButton icon="check" onClick={this.onClick} className="radio-button"/>
                </Section>

                <Section 
                    title="Tags"
                    description="Some description about the button">

                    <ActionBarTag text="Tag" color="red" onClick={this.onClick} itemCount="0"/>
                    <ItemTag text="Item" color="grey" isSelected={true} onClick={this.onClick} />
                </Section>


            </div>
        );
    }

});

module.exports = Container;