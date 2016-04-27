var React = require('react');
var Section = require('./section.jsx');
var Button = require('./buttons/button.jsx');
var FlatButton = require('./buttons/flatButton.jsx');
var CollectionItem = require('./collection/collectionItem.jsx');
var CollectionItemContent = require('./collection/collectionItemContent_example.jsx'); //Example views for collection item content
var CollectionItemAction = require('./collection/collectionItemAction_example.jsx'); //Example views for item actions
var Login = require('./login/login.jsx');

var Container = React.createClass({

    //Just an example to show functionality of components is there.
    onClick: function() {
        console.log('This component has been clicked')
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
                    title="Login"
                    description="">

                    <Login />
                    
                </Section>

            </div>
        );
    }

});

module.exports = Container;
