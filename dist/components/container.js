'use strict';

var React = require('react');
var Section = require('./section.js');
var Button = require('./buttons/button.js');
var FlatButton = require('./buttons/flatButton.js');
var CollectionItem = require('./collection/collectionItem.js');
var CollectionItemContent = require('./collection/collectionItemContent_example.js'); //Example views for collection item content
var CollectionItemAction = require('./collection/collectionItemAction_example.js'); //Example views for item actions
var Login = require('./login/login.js');
var SearchBar = require('./search/searchBar.js');
var SelectOption = require('./select/selectOption.js');

var Container = React.createClass({
    displayName: 'Container',


    //This function is an example too show how it would be used on certain components.
    onClick: function onClick() {
        console.log('This component has been clicked');
    },

    //Simalar to the function above, this is an example to show the onChange event might work.
    onChange: function onChange(event) {
        event.target.value;

        console.log('This component has been changed');
    },

    //This renders all the components and allows you too pass in all the neccasary props.
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                Section,
                {
                    className: 'ui-elements-button',
                    title: 'Button',
                    description: 'A Button indicates a possible interaction. A standard Button element in Evolve usally consists of an onClick event along with some text and an icon.' },
                React.createElement(Button, { icon: 'trash', text: 'Primary Button', className: 'primary', onClick: this.onClick }),
                React.createElement(Button, { icon: 'star', iconPosition: 'right', text: 'Secondary Button', className: 'secondary', onClick: this.onClick }),
                React.createElement(Button, { icon: 'trash', text: 'Alert Button', className: 'alert', onClick: this.onClick }),
                React.createElement(Button, { disabled: true, className: 'primary', text: 'Disabled Button', onClick: this.onClick }),
                React.createElement(Button, { text: 'Large Primary Button', className: 'primary large', onClick: this.onClick }),
                React.createElement(Button, { icon: 'arrow-left', onClick: this.onClick }),
                React.createElement(Button, { icon: 'star', text: 'full width button', onClick: this.onClick, className: 'alert full-width' })
            ),
            React.createElement(
                Section,
                {
                    className: 'ui-elements-flat-button',
                    title: 'Flat Button',
                    description: 'A Flat button is displayed for frequently used actions. Generally a Button Action has no text, no background, only an icon.' },
                React.createElement(
                    'div',
                    { className: 'primary-flat-buttons' },
                    React.createElement(FlatButton, { className: 'primary article-item-buttons-edit-article ', icon: 'pencil4', onClick: this.onClick }),
                    React.createElement(FlatButton, { className: 'secondary article-item-buttons-move-article-down ', icon: 'exit-down2', onClick: this.onClick }),
                    React.createElement(FlatButton, { className: 'alert article-item-buttons-add-article-divider ', icon: 'picture2', onClick: this.onClick }),
                    React.createElement(FlatButton, { className: 'primary article-item-buttons-paste-article ', icon: 'paste', onClick: this.onClick }),
                    React.createElement(FlatButton, { className: 'alert', icon: 'trash', onClick: this.onClick })
                )
            ),
            React.createElement(
                Section,
                {
                    title: 'Collection Item',
                    description: 'A collection item Simalarly too a list item takes in a range of different elements. A Collection element usually consist of a contnent item and an action item underneath' },
                React.createElement(CollectionItem, { className: 'course-collection-item', contentComponent: React.createElement(CollectionItemContent, { title: 'The Title', body: 'this body this body this body this body' }), actionsComponent: React.createElement(CollectionItemAction, null) })
            ),
            React.createElement(
                Section,
                {
                    title: 'Login',
                    description: '' },
                React.createElement(Login, null)
            ),
            React.createElement(
                Section,
                {
                    title: 'Search bar',
                    description: '' },
                React.createElement(SearchBar, { deafultButton: React.createElement(Button, { icon: 'magnifier', className: 'search-bar-button' }), alternativeButton: React.createElement(Button, { icon: 'cross-circle', className: 'primary search-bar-button' }), onClick: this.onClick, onChange: this.onChange })
            ),
            React.createElement(
                Section,
                {
                    title: 'Search option',
                    description: '' },
                React.createElement(SelectOption, { valueOne: 'this is the first value', valueTwo: 'this is the second', className: '', onChange: this.onChange })
            )
        );
    }

});

module.exports = Container;