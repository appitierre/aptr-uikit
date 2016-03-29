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
var List = require('./lists/list.jsx');
var Tab = require('./dropDown/tab.jsx');

var Container = React.createClass({

 //Just an example to show functionality of components is there.   
    getInitialState: function() {
        var isSelected = this.props.navIsSelected;    
        
        return ({
            tabSelected: false,
        })
    },

    onClick: function() {
        console.log('clicked')
    },

    onTabClick: function() {
        if (this.state.tabSelected === false) {
            this.setState ({
                tabSelected: true
            }) 
        } else {
            this.setState ({
                tabSelected: false
            })
        }
    },

    onNavClick: function() {
        
        this.setState ({
            isSelected: true
        })
    },

//State should not be here, should be in a seperate controller view.
    
    render: function() {
        console.log(this.state.isSelected)
        return (
            <div>
                <Section 
                    title="Button"
                    description="A Button clearly indicates a possible user interaction. A standard Button element in Evolve would usally consists of an onClick event, along with some text and an icon. Here are all of buttons in Evolve!">

                    <Button icon="trash" text="Primary Button" className="primary" onClick={this.onClick}/>
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
                    description="A breadcrumb can be use to show heirachy between different sets of content. This could also be helpful to a user if they wanted to identify their current location within Evolve.">

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

                    <Form title="Component body"/>
                </Section>

                <Section 
                    title="List"
                    description="A form displays a set of related user input fields in a structured way">

                    <List title="Title" body="This is the body of the text oh yes, yes it certainly is" onClick={this.onClick} iconLeft="book2" iconRight="chevron-right-circle" className="dashboard-item-list-item" firstItem={true}/>
                    <List title="Example course" body="This is the body of the text oh yes, yes it certainly is" onClick={this.onClick} iconLeft="book2" iconRight="chevron-right-circle" className="dashboard-item-list-item" firstItem={false}/>

                </Section>

                <Section    
                    title="Menus"
                    description="To put it simply, a menu displays a group of navigation actions. This allows the user to navigate through the tool with ease. ">

                <div className="navigation">
                    <NavigationToolbar item="Dashboard" className="navigation-item" isSelected={true} onClick={this.onClick}/>
                    <NavigationToolbar item="Course" className="navigation-item" isSelected={false} onClick={this.onClick}/>
                    <NavigationToolbar item="Assets" className="navigation-item" isSelected={false} onClick={this.onClick}/>
                </div>
                
                </Section>

                <Section 
                    title="Switches"
                    description="Switches are used to toggle the states and values of your selected item. Radio button are generally used to allow users to select one item at a time. A Radio button would simply only need an icon and an onClick event to change the state.
                    Simalarly a toggle component allows the user to change a setting between two states.">

                    <RadioButton icon="check" onClick={this.onClick} className="radio-button"/>
                </Section>

                { /* <Section 
                    title="Tags"
                    description="Some description about the button">

                    <ActionBarTag text="Tag" color="red" onClick={this.onClick} itemCount="0"/>
                    <ItemTag text="Item" color="grey" isSelected={true} onClick={this.onClick}/>
                </Section> */ }
                
                <Section 
                    title="Tabs"
                    description="At default the content of the tab is hidden. With the onClick event the hidden value is then toggled, revealing what is underneath.">

                    <Tab title="Item 1" className="forms-list-item" tabSelected={this.state.tabSelected} onClick={this.onTabClick}/>
                </Section> 


            </div>
        );
    }

});

module.exports = Container;