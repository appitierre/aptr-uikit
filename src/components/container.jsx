var React = require('react');
var Section = require('./section.jsx');
var Button = require('./buttons/button.jsx');
var FlatButton = require('./buttons/flatButton.jsx');
var CollectionItem = require('./collection/collectionItem.jsx');
var CollectionItemContent = require('./collection/collectionItemContent_example.jsx'); //Example views for collection item content
var CollectionItemAction = require('./collection/collectionItemAction_example.jsx'); //Example views for item actions
// var ActionButton = require('./buttons/actionButton.jsx');
// var PlainButton = require('./buttons/plainButton.jsx');
// var Card = require('./cards/card.jsx');
// var RadioButton = require('./switches/radioButton.jsx');
// var Breadcrumb = require('./navigations/breadcrumb.jsx');
// var Input = require('./inputs/input.jsx');
// var DropDown = require('./dropDown/dropDown.jsx');
// var Toggle = require('./switches/toggle.jsx');
// var NavigationToolbar = require('./navigations/navigationToolbar.jsx');
// var List = require('./lists/list.jsx');
// var Tab = require('./dropDown/tab.jsx');
// var InteractionButtonToggle = require('./interactions/interactionButtonToggle.jsx');
// var SearchInput = require('./inputs/searchInput.jsx');
// var PasswordInput = require('./inputs/passwordInput.jsx');
// var CheckboxInput = require('./inputs/checkboxInput.jsx');

var Container = React.createClass({

 //Just an example to show functionality of components is there.
    getInitialState: function() {
        var isSelected = this.props.navIsSelected;

        return ({
            tabSelected: false,
            isSelected: null
        })
    },

    onClick: function() {
        console.log('clicked')
    },

    onRadioClicked: function() {
        this.setState({
            isSelected: false
        })
    },  

    onInteractionClicked: function() {
        console.log('interaction clickedd')
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

    onNavClicked: function() {

        this.setState ({
            isSelected: true
        })
    },

//State should not be here, should be in a seperate controller view.

    render: function() {
        return (
            <div>
                <Section
                    className="ui-elements-button"
                    title="Button"
                    description="A Button indicates a possible interaction. A standard Button element in Evolve usally consists of an onClick event along with some text and an icon.">

                    <Button icon="trash" text="Primary Button" className="primary" onClick={this.onClick}/>
                    <Button icon="star" iconPosition="right" text="Secondary Button" className="secondary" onClick={this.onClick}/>
                    <Button icon="trash" text="Alert Button" className="alert" onClick={this.onClick}/>
                    <Button disabled={true} className="primary" text="Disabled Button" onClick={this.onClick}/>
                    <Button text="Large Primary Button" className="primary large" onClick={this.onClick}/>
                    <Button icon="arrow-left" onClick={this.onClick}/>
 
                </Section>

                <Section
                    className="ui-elements-flat-button"
                    title="Flat Button"
                    description="A Button Action is displayed for frequently used actions. Generally a Button Action has no text, only an icon.">

                <div className="primary-flat-buttons">
                    <FlatButton className="primary article-item-buttons-edit-article " icon="pencil4" onClick={this.onClick}/>
                    <FlatButton className="secondary article-item-buttons-move-article-down " icon="exit-down2" onClick={this.onClick}/>
                    <FlatButton className="alert article-item-buttons-add-article-divider " icon="picture2" onClick={this.onClick}/>
                    <FlatButton className="primary article-item-buttons-paste-article " icon="paste" onClick={this.onClick}/>
                    <FlatButton className="alert" icon="trash" onClick={this.onClick}/>
                </div>
                
                </Section>

                <Section
                    title="Collection Item"
                    description="A collection item Simalarly too a list item takes in a range of different elements. A Collection element usually consist of a contnent item and an action item underneath">

                    <CollectionItem className="course-collection-item" contentComponent={<CollectionItemContent title='The Title' body='this body this body this body this body'/>} actionsComponent={<CollectionItemAction />} />

                </Section>

                <Section
                    title=""
                    description="">
                    
                </Section>

                {/*<Section
                    title="Breadcrumbs"
                    description="Breadcrumbs indicate a navigation trail and provide users with their current location.">

                <div className="breadcrumbs-container">
                    <Breadcrumb text="course" onClick={this.onClick} icon="chevron-right-circle"/>
                    <Breadcrumb text="page" onClick={this.onClick} icon="chevron-right-circle"/>
                    <Breadcrumb text="article" onClick={this.onClick} icon="chevron-right-circle"/>
                    <Breadcrumb text="block" onClick={this.onClick} icon="chevron-right-circle"/>
                </div>

                </Section>

                <Section
                    title="Card"
                    description="A card displays different types of related content. They usually contain a main image and text.">

                    <Card title="Title" body="" className="asset" onClick={this.onClick} image="css/images/emu.jpg"/>
                </Section>

                <Section
                    title="Drop Down"
                    description="Provides a list of selectable options as a drop down.">

                    <DropDown firstValue="" firstOption="ascending" secondValue="" secondOption="descending"/>
                </Section>

                <Section
                    title="Form"
                    description="A form displays a set of related user input fields in a structured way.">

                    <Tab title="Item 1" className="forms-list-item" tabSelected={this.state.tabSelected} onClick={this.onTabClick}/>
                </Section>

                <Section
                    title="Input"
                    description="Receives user input. May be part of a form.">

                    <Input title="Input field"/>
                    <SearchInput onClick={this.onClick}/>
                    <PasswordInput />
                    <RadioButton icon="check" onClick={this.onRadioClicked} className="radio-button" isSelected={true}/>
                    <CheckboxInput text="this is the text"/>
                </Section>

                <Section
                    title="Interaction button toggle"
                    description="A Button indicates a possible interaction. A standard Button element in Evolve usally consists of an onClick event along with some text and an icon.">

                    <InteractionButtonToggle icon="star" altIcon="trash" iconPosition="right" text="This is the text" altText="thiss is the alt text" className="interaction-button-toggle"/>

                </Section>
                
                <Section
                    title="List"
                    description="A form displays a set of related user input fields in a structured way">

                    <List title="Title" body="This is the body of the text oh yes, yes it certainly is" onClick={this.onClick} iconLeft="book2" iconRight="chevron-right-circle" className="dashboard-item-list-item" firstItem={true}/>
                    <List title="Example course" body="This is the body of the text oh yes, yes it certainly is" onClick={this.onClick} iconLeft="book2" iconRight="chevron-right-circle" className="dashboard-item-list-item" firstItem={false}/>

                </Section>

                <Section
                    title="Navigation Toolbar"
                    description="A menu displays a group of navigation destinations.">

                <div className="navigation">
                    <NavigationToolbar item="Dashboard" className="navigation-item" isSelected={false} onClick={this.onNavClicked}/>
                    <NavigationToolbar item="Course" className="navigation-item" isSelected={true} onClick={this.onNavClicked}/>
                    <NavigationToolbar item="Assets" className="navigation-item" isSelected={false} onClick={this.onNavClicked}/>

                </div>

                </Section>

                <Section
                    title="Switches"
                    description="Switches toggle states and values of your selected item. Radio button are used to allow users to select one item at a time. A Radio button needs an icon and an onClick event to change the state.
                    Simalarly a toggle component allows the user to change a setting between two states.">

                </Section>*/}

            </div>
        );
    }

});

module.exports = Container;
