var React = require('react');
var SyntaxHighlighter = require('react-syntax-highlighter').default;
var jsxToString = require('jsx-to-string'); 
var docco = require('react-syntax-highlighter/dist/styles').docco;
var Section = require('./section');
var Button = require('./uiElements/components/buttons/button');
var FlatButton = require('./uiElements/components/buttons/flatButton');
var CollectionItem = require('./uiElements/components/collections/collectionItem');
var CollectionItemContent = require('./uiElements/components/collections/collectionItemContent_example'); //Example views for collection item content
var CollectionItemAction = require('./uiElements/components/collections/collectionItemAction_example'); //Example views for item actions
var SearchBar = require('./uiElements/components/search/searchBar');
var SelectOption = require('./uiElements/components/select/selectOption');
var RangeSlider = require('./uiElements/components/rangeSlider/rangeSlider');
var Card = require('./uiElements/components/card/card');
var Loading = require('./uiElements/components/loading/loading');
var Tag = require('./uiElements/components/tag/tag');
var Pagination = require('./uiElements/components/pagination/pagination');
var ButtonGroup = require('./uiElements/components/buttonGroup/buttonGroup');
var Folder = require('./uiElements/components/folder/folder');
var ActionBar = require('./uiElements/components/actions/actionBar');
var DropDown = require('./uiElements/components/dropDown/dropDown');
var ProgressBar = require('./uiElements/components/progressBar/progressBar');
var ProgressIndicator = require('./uiElements/components/progressIndicator/progressIndicator');
var ItemToggle = require('./uiElements/components/toggle/itemToggle');
var AccordionItem = require('./uiElements/components/accordion/accordionItem');
var CheckboxItem = require('./uiElements/components/checkboxItem/checkboxItem');
var ListItem = require('./uiElements/components/list/listItem');
var ListItems = require('./uiElements/components/list/listItems');
var Message = require('./uiElements/components/message/message');



var _ = require('underscore');
//Array is just an example of how the Folder component returns the data.
var Folders = [
        {
            text: 'Maths',
            _color: 'red',
            className: 'maths-folder'
        },
        {
            text: 'English',
            _color: 'blue'
        }
    ];

var Container = React.createClass({
    //This function is an example too show how it would be used on certain components.
    onClick: function() {
        console.log('This component has been clicked')
    },

    onCloseButtonClicked: function() {
        console.log("The close button has been clicked")
    },

    //Simalar to the function above, this is an example to show the onChange event might work.
    onChange: function(event) {
        var value = event;
        if (event.target) {
            value = event.target.value;
        }

        console.log('This component has been changed', value);
        
    },

    getFolders: function() {
        return _.map(Folders, function(tag, index) {
            return (
                <Folder 
                    folder={tag}
                    key={index}
                    icon='tag'
                />
            )
        }, this);
    },  



    //This renders all the components and allows you too pass in all the neccasary props.
    render: function() {
        var actionBar = jsxToString(
            <ActionBar>
                <Button text="primary" type="primary" icon="star" />
            </ActionBar>
        );
        var accordionItem = jsxToString(
            <AccordionItem content={ <div>HELLO</div>} itemTitle="accordion 1"/>
        );
        var button = jsxToString(
            <Button 
                icon="trash" 
                text="Primary Button" 
                className="primary" 
                onClick={this.onClick} 
                toolTip="oh yes primary" 
                toolTipPosition="bottom"/>
        );
        var buttonGroup = jsxToString(
             <ButtonGroup 
                onChange={this.onChange} 
                buttonType="primary" 
                value="menu" 
                className="group-view" 
                buttons={[
                    {
                        _icon: "menu",
                        _value: "menu"
                    }, {
                        _icon: "trash",
                        _value: "trash"
                    }, {
                        _icon: "check",
                        _value: "check",
                        toolTip: "hey there"
                    }
                ]} />
        );


        return (         
            <div>

                <Section
                    title="ActionBar"
                    description=""
                    documentation={
                        <SyntaxHighlighter language='javascript' style={docco} children={actionBar}> 

                        </SyntaxHighlighter>
                    }
                >
                    <ActionBar>
                        <Button text="primary" type="primary" icon="star" />
                    </ActionBar>

                </Section>

                <Section 
                    title="Accordion item"
                    description=""
                    documentation={
                        <SyntaxHighlighter language='javascript' style={docco} children={accordionItem}> 

                        </SyntaxHighlighter>
                    }
                >

                    <AccordionItem content={ <div>HELLO</div>} itemTitle="accordion 1"/>

                </Section>

                <Section
                    className="ui-elements-button"
                    title="Button"
                    description="A Button indicates a possible interaction. A standard Button element in Evolve usally consists of an onClick event along with some text and an icon."
                    documentation={
                        <SyntaxHighlighter language='javascript' style={docco} children={button}> 

                        </SyntaxHighlighter>
                    }
                >

                    <Button icon="trash" text="Primary Button" className="primary" onClick={this.onClick} toolTip="oh yes primary" toolTipPosition="bottom"/>
                    <Button icon="star" iconPosition="right" text="Secondary Button" className="secondary" onClick={this.onClick}/>
                    <Button icon="trash" text="Alert Button" className="alert" onClick={this.onClick}/>
                    <Button disabled={true} className="primary" text="Disabled Button" onClick={this.onClick}/>
                    <Button text="Large Primary Button" className="primary large" onClick={this.onClick}/>
                    <Button icon="arrow-left" onClick={this.onClick} toolTip="oh yes primary"/>
                    <Button icon="star" text="full width button" onClick={this.onClick} className="primary full-width"/>

                </Section>

                <Section
                    title="ButtonGroup"
                    description=""
                    documentation={
                        <SyntaxHighlighter language='javascript' style={docco} children={buttonGroup}> 

                        </SyntaxHighlighter>
                    }
                >

                    <ButtonGroup onChange={this.onChange} buttonType="primary" value="menu" className="group-view" buttons={[
                        {
                            _icon: "menu",
                            _value: "menu"
                        }, {
                            _icon: "trash",
                            _value: "trash"
                        }, {
                            _icon: "check",
                            _value: "check",
                            toolTip: "hey there"
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
                            _value: "trash",
                            toolTip: "hey there",
                            toolTipPosition: "bottom"
                        }
                    ]} />
                    
                </Section>

                <Section
                    title="Checkbox Item"
                    description="">

                    <CheckboxItem id="yes" itemText="checkbox component"/>    
                </Section>

                <Section
                    title="Collection Item"
                    description="A collection item Simalarly too a list item takes in a range of different elements. A Collection element usually consist of a contnent item and an action item underneath" 
                    documentation={
                        <SyntaxHighlighter 
                            language='javascript' 
                            style={docco} 
                            children={ jsxToString(
                                <CollectionItem 
                                    className="course-collection-item" 
                                    contentComponent={<CollectionItemContent title='The Title' body='this body this body this body this body'/>} actionsComponent={<CollectionItemAction />} 
                                />
                            ) 
                        }>

                        </SyntaxHighlighter>
                    }
                >
                    

                    <CollectionItem className="course-collection-item" contentComponent={<CollectionItemContent title='The Title' body='this body this body this body this body' tag={<Tag text="Chemistry" tagColor="red" hasCloseButton={true}/>}/>} actionsComponent={<CollectionItemAction />} />

                </Section>


                <Section
                    title="DropDown"
                    description=""
                    documentation={
                        <SyntaxHighlighter 
                            language='javascript' 
                            style={docco} 
                            children={jsxToString(
                                <DropDown icon="menu" className="menu-item" component={<div>hello</div>}/>
                                )
                            }
                        />
                    }
                >

                    <DropDown icon="menu" className="menu-item" component={<div>hello</div>}/>
                    
                </Section>

                <Section
                    title="Card"
                    description=""
                    documentation={
                        <SyntaxHighlighter 
                            language='javascript' 
                            style={docco} 
                            children={
                                jsxToString(
                                    <Card className="asset review"/>
                                )
                            }
                        />
                    }
                >

                    <Card className="asset review"/>
                    
                </Section>

                <Section
                    title="Select Option"
                    description=""
                    documentation={
                        <SyntaxHighlighter
                            language='javascript' 
                            style={docco} 
                            children={
                                jsxToString(
                                    <SelectOption
                                        className="options"
                                        value="Ascending" 
                                        options={[
                                            {
                                                text: 'Ascending',
                                                _value: 'Ascending',
                                                index: 0,
                                                onClick: this.onClick
                                            },
                                            {
                                                text: 'Descending',
                                                _value: 'Descending',
                                                index: 1,
                                                onClick: this.onClick
                                            },
                                            {
                                                text: 'Recent',
                                                _value: 'Recent',
                                                index: 2,
                                                onClick: this.onClick
                                            },
                                            {
                                                text: 'Oldest',
                                                _value: 'Oldest',
                                                index: 3,
                                                onClick: this.onClick
                                            }
                                        ]}
                                    />
                                )   
                            }
                        />
                    }
                >

                    <SelectOption
                        className="options"
                        value="Ascending" 
                        options={[
                            {
                                text: 'Ascending',
                                _value: 'Ascending',
                                index: 0,
                                onClick: this.onClick
                            },
                            {
                                text: 'Descending',
                                _value: 'Descending',
                                index: 1,
                                onClick: this.onClick
                            },
                            {
                                text: 'Recent',
                                _value: 'Recent',
                                index: 2,
                                onClick: this.onClick
                            },
                            {
                                text: 'Oldest',
                                _value: 'Oldest',
                                index: 3,
                                onClick: this.onClick
                            }
                        ]}
                    />
                    
                </Section>

                <Section
                    className="ui-elements-flat-button"
                    title="Flat Button"
                    description="A Flat button is displayed for frequently used actions. Generally a Button Action has no text, no background, only an icon."
                    documentation={
                        <SyntaxHighlighter 
                            language='javascript' 
                            style={docco} 
                            children={
                                jsxToString(
                                    <FlatButton 
                                        className="article-item-buttons-edit-article " 
                                        type="primary" 
                                        icon="pencil4" 
                                        toolTip="edit button" 
                                        toolTipPosition="top" 
                                        onClick={this.onClick}
                                    />
                                )
                            }
                        />
                    }
                >

                <div className="primary-flat-buttons">
                    <FlatButton className="article-item-buttons-edit-article " type="primary" icon="pencil4" toolTip="edit button" toolTipPosition="top" onClick={this.onClick}/>
                    <FlatButton className="article-item-buttons-move-article-down " type="secondary" icon="exit-down2" onClick={this.onClick}/>
                    <FlatButton className="alert article-item-buttons-add-article-divider " toolTip="add here" icon="picture2" toolTipPosition="bottom" onClick={this.onClick}/>
                    <FlatButton className="primary article-item-buttons-paste-article " toolTip="paste here" icon="paste" onClick={this.onClick}/>
                    <FlatButton className="alert" icon="trash" onClick={this.onClick} toolTip="delete here" toolTipPosition="bottom"/>

                    <FlatButton className="secondary" icon="star" text="secondary flat" onClick={this.onClick}/>
                    <FlatButton className="primary" icon="star" text="primary flat" onClick={this.onClick}/>
                    <FlatButton icon="star" text="plain flat" onClick={this.onClick}/>



                </div>


                
                </Section>
                
                <Section
                    title="Folder"
                    description=""
                >
                
                    {this.getFolders()}
                    
                </Section>

                <Section 
                    title="Item toggle"
                    description="">

                    <ItemToggle 
                        className="" 
                        toggleId="toggle" 
                        initialValue={false} 
                        onChange={this.onChange}/>

                </Section>

                <Section
                    title="List"
                    description="">

                    <ListItems
                        shouldShowAlternativeColors={true}
                        className="dashboard-items"
                        items={[
                            <ListItem 
                                onClick={this.onClick} 
                                itemText="this is the text for the list item"
                                itemDetail="the item detail"
                                key={1}
                                buttons={
                                    [{
                                        type: "primary",
                                        icon: "pencil4",
                                        onClick: this.onClick    
                                    },
                                    {
                                        type: "secondary",
                                        icon: "screen"    
                                    },
                                    {
                                        type: "alert",
                                        icon: "trash"    
                                    },
                                    {
                                        type: "secondary",
                                        icon: "screen"    
                                    },
                                    {
                                        type: "primary",
                                        icon: "pencil4",
                                        onClick: this.onClick    
                                    },
                                    {
                                        type: "alert",
                                        icon: "trash"    
                                    }
                                ]}
                            />,
                            <ListItem  
                                itemText="second list item has been rendered"
                                icon="book2"
                                key={2}
                                buttons={
                                    [{
                                        type: "alert",
                                        icon: "trash",
                                        onClick: this.onClick    
                                    }
                                ]}
                            />,
                            <ListItem  
                                itemText="second list item has been rendered"
                                itemDetail="this is detail section"
                                key={3}
                                icon="book2"
                                onClick={this.onClick}
                            />,
                            <ListItem  
                                itemText="second list item has been rendered"
                                icon="book2"
                                key={4}
                                onClick={this.onClick}
                            />,
                            <ListItem
                                key={5}
                                component={
                                    <div>
                                        The compoonent
                                    </div>
                                }
                                onClick={this.onClick}
                            />
                        ]}
                    />
                    
                    
                </Section>
               
                <Section
                    title="Loading"
                    description="">

                    <Loading text="Loading" className="login" hasDataLoaded={true}>
                        <div>
                            DATA HAS LOADED
                        </div>
                    </Loading>
                    
                </Section>

                <Section
                    title="Message"
                    description="">

                    <Message 
                        title="Brandon Karunakaran" 
                        body="Brandon recieved a message from the message/notification ui element"
                        onClick={this.onClick}
                        avatar="http://placehold.it/400x100"
                        onCloseButtonClicked={this.onCloseButtonClicked}
                        icon="alarm"
                        iconColor="red"/>
                

                </Section>
                
                <Section
                    title="Pagination"
                    description="">

                    <Pagination currentPage={1} totalPages={0} buttonType="secondary" className="course" toolTipRightButton="right" toolTipRightButtonPosition="bottom" toolTipLeftButton="left" />
                    
                </Section>

                <Section
                    title="ProgressBar"
                    description="">

                    <ProgressBar value={23} />
                    
                </Section>

                <Section
                    title="ProgressIndicator"
                    description="">

                    <ProgressIndicator />
                    
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
