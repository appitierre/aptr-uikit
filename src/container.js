var React = require('react');
var Section = require('./section.js');
var Button = require('./uiElements/components/buttons/button.js');
var FlatButton = require('./uiElements/components/buttons/flatButton.js');
var CollectionItem = require('./uiElements/components/collections/collectionItem.js');
var CollectionItemContent = require('./uiElements/components/collections/collectionItemContent_example.js'); //Example views for collection item content
var CollectionItemAction = require('./uiElements/components/collections/collectionItemAction_example.js'); //Example views for item actions
var SearchBar = require('./uiElements/components/search/searchBar.js');
var SelectOption = require('./uiElements/components/select/selectOption.js');

var Container = React.createClass({

    //This function is an example too show how it would be used on certain components.
    onClick: function() {
        console.log('This component has been clicked')
    },

    //Simalar to the function above, this is an example to show the onChange event might work.
    onChange: function(event) {
        event.target.value;
        
        console.log('This component has been changed')
    },

    //This renders all the components and allows you too pass in all the neccasary props.
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
                    <Button icon="star" text="full width button" onClick={this.onClick} className="alert full-width"/>
                     
                </Section>


                <Section
                    className="ui-elements-flat-button"
                    title="Flat Button"
                    description="A Flat button is displayed for frequently used actions. Generally a Button Action has no text, no background, only an icon.">

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
                    title="Search bar"
                    description="">

                    <SearchBar deafultButton={<Button icon='magnifier' className='search-bar-button'/>} alternativeButton={<Button icon='cross-circle' className='primary search-bar-button'/>} onClick={this.onClick} onChange={this.onChange}/>
                    
                </Section>

                <Section
                    title="Search option"
                    description="">

                    <SelectOption valueOne='this is the first value' valueTwo='this is the second' className='' onChange={this.onChange}/>
                    
                </Section>

            </div>
        );
    }

});

module.exports = Container;
