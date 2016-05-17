var React = require('react');
var Section = require('./section.js');
var Button = require('./uiElements/components/buttons/button.js');
var FlatButton = require('./uiElements/components/buttons/flatButton.js');
var CollectionItem = require('./uiElements/components/collections/collectionItem.js');
var CollectionItemContent = require('./uiElements/components/collections/collectionItemContent_example.js'); //Example views for collection item content
var CollectionItemAction = require('./uiElements/components/collections/collectionItemAction_example.js'); //Example views for item actions
var SearchBar = require('./uiElements/components/search/searchBar.js');
var SelectOption = require('./uiElements/components/select/selectOption.js');
var RangeSlider = require('./uiElements/components/rangeSlider/rangeSlider');
var Card = require('./uiElements/components/card/card.js');
var Loading = require('./uiElements/components/loading/loading.jsx');
var Tag = require('./uiElements/components/tag/tag.jsx');
var Pagination = require('./uiElements/components/pagination/pagination.jsx');
var ButtonGroup = require('./uiElements/components/buttonGroup/buttonGroup.jsx');
var Folder = require('./uiElements/components/folder/folder.jsx');
var ActionBar = require('./uiElements/components/actions/actionBar.jsx')



var Container = React.createClass({

    //This function is an example too show how it would be used on certain components.
    onClick: function() {
        console.log('This component has been clicked')
    },

    //Simalar to the function above, this is an example to show the onChange event might work.
    onChange: function(event) {
        var value = event;
        if (event.target) {
            value = event.target.value;
        }

        console.log('This component has been changed', value);
        
    },


    //This renders all the components and allows you too pass in all the neccasary props.
    render: function() {
        return (         
            <div>

                <Section
                    title="ActionBar"
                    description="">

                    <ActionBar>
                        <Button text="primary" type="primary" icon="star"/>
                    </ActionBar>
                    
                </Section>

                <Section
                    className="ui-elements-button"
                    title="Button"
                    description="A Button indicates a possible interaction. A standard Button element in Evolve usally consists of an onClick event along with some text and an icon."
                    propDescription="@props: 
                        icon: STRING
                        text: STRING
                        className: STRING - primary, secondary and alert
                        onClick: FUNCTION, Required
                        iconPosition: STRING 
                        disabled: BOOLEAN" >

                    <Button icon="trash" text="Primary Button" className="primary" onClick={this.onClick}/>
                    <Button icon="star" iconPosition="right" text="Secondary Button" className="secondary" onClick={this.onClick}/>
                    <Button icon="trash" text="Alert Button" className="alert" onClick={this.onClick}/>
                    <Button disabled={true} className="primary" text="Disabled Button" onClick={this.onClick}/>
                    <Button text="Large Primary Button" className="primary large" onClick={this.onClick}/>
                    <Button icon="arrow-left" onClick={this.onClick}/>
                    <Button icon="star" text="full width button" onClick={this.onClick} className="alert full-width"/>
                     
                </Section>

                <Section
                    title="ButtonGroup"
                    description="">

                    <ButtonGroup onChange={this.onChange} buttonType="primary" value="menu" buttons={[
                        {
                            _icon: "menu",
                            _value: "menu"
                        }, {
                            _icon: "trash",
                            _value: "trash"
                        }, {
                            _icon: "check",
                            _value: "check"
                        }
                    ]} />

                    <ButtonGroup 
                        onChange={this.onChange} 
                        buttonType="primary" 
                        value="menu" 
                        shouldUseToggle={false}
                        buttons={[
                        {
                            _icon: "menu",
                            _value: "menu"
                        }, {
                            _icon: "trash",
                            _value: "trash"
                        }
                    ]} />

                    <ButtonGroup 
                        onChange={this.onChange} 
                        buttonType="primary" 
                        value="menu" 
                        shouldUseToggle={true}
                        buttons={[
                        {
                            _icon: "menu",
                            _value: "menu"
                        }, {
                            _icon: "trash",
                            _value: "trash"
                        }
                    ]} />
                    
                </Section>

                <Section
                    title="Collection Item"
                    description="A collection item Simalarly too a list item takes in a range of different elements. A Collection element usually consist of a contnent item and an action item underneath"
                    propDescription="@Props:
                        className: String,
                        contentComponent: Component (collectionItemContent_example.jsx), required
                        actionsComponent: Component (collectionItemAction_example.jsx)" >

                    <CollectionItem className="course-collection-item" contentComponent={<CollectionItemContent title='The Title' body='this body this body this body this body'/>} actionsComponent={<CollectionItemAction />} />

                </Section>


                <Section
                    title="Card"
                    description="">

                    <Card />
                    
                </Section>

                <Section
                    className="ui-elements-flat-button"
                    title="Flat Button"
                    description="A Flat button is displayed for frequently used actions. Generally a Button Action has no text, no background, only an icon."
                    propDescription="@PROPS:
                        ClassName: STRING,
                        Icon: STRING,
                        onClick: FUNCTION, ">

                <div className="primary-flat-buttons">
                    <FlatButton className="primary article-item-buttons-edit-article " icon="pencil4" onClick={this.onClick}/>
                    <FlatButton className="secondary article-item-buttons-move-article-down " icon="exit-down2" onClick={this.onClick}/>
                    <FlatButton className="alert article-item-buttons-add-article-divider " icon="picture2" onClick={this.onClick}/>
                    <FlatButton className="primary article-item-buttons-paste-article " icon="paste" onClick={this.onClick}/>
                    <FlatButton className="alert" icon="trash" onClick={this.onClick}/>

                    <FlatButton className="secondary" icon="star" text="secondary flat" onClick={this.onClick}/>
                    <FlatButton className="primary" icon="star" text="primary flat" onClick={this.onClick}/>


                </div>


                
                </Section>
                
                <Section
                    title="Folder"
                    description="">

                    <Folder  
                        onClick={this.onClick}  
                        text="Maths"
                        color="red"
                        className="courses-folder" 
                        icon="tag"/>

                    <Folder  
                        onClick={this.onClick}  
                        text="English"
                        color="Blue"
                        className="courses-folder" 
                        icon="tag"/>
                    
                </Section>


                <Section
                    title="Loading"
                    description="">

                    <Loading text="Loading"/>
                    
                </Section>
                
                <Section
                    title="Pagination"
                    description="">

                    <Pagination currentPage={1} totalPages={9} buttonType="secondary"/>
                    
                </Section>
                
                <Section
                    title="Range Slider"
                    description="">
                    <RangeSlider
                        onChange={(value) => console.log('range slider value:', value)}
                        step={1}
                        min={1}
                        max={100}
                        defaultValue={30}
                    />
                </Section>
                
                <Section
                    title="Search bar"
                    description="">

                    <SearchBar onClick={this.onClick} onChange={this.onChange} />
                    
                </Section>

                <Section
                    title="Tag"
                    description="">

                    <Tag text="Chemistry" tagColor="red" hasCloseButton={true}/>
                    <Tag text="Biology" tagColor="violet"/>
                    <Tag text="Physics" tagColor="turquoise" hasCloseButton={true}/>
                    
                </Section>

            </div>
        );
    }

});

module.exports = Container;
