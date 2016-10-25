var React = require('react');
var _ = require('lodash');

var ButtonExamples = require('./uiElements/buttons/examples');
var ActionBarExamples = require('./uiElements/actionBar/examples');
var ButtonGroupExamples = require('./uiElements/buttonGroup/examples');
var CardExamples = require('./uiElements/card/examples');
var CheckListItemExamples = require('./uiElements/checkListItem/examples');
var ChipExamples = require('./uiElements/chip/examples');
var CollectionItemExamples = require('./uiElements/collections/examples');
var CssBorderRadiusSelectorExamples = require('./uiElements/cssBorderRadiusSelector/examples');
var CssBorderSelectorExamples = require('./uiElements/cssBorderSelector/examples');
var CssValueExamples = require('./uiElements/cssValue/examples');
var DropDownExamples = require('./uiElements/dropDown/examples');
var FolderExamples = require('./uiElements/folder/examples');
var ListItemsExamples = require('./uiElements/list/examples');
var LoadingExamples = require('./uiElements/loading/examples');
var MessageExamples = require('./uiElements/message/examples');
var PaginationExamples = require('./uiElements/pagination/examples');
var ProgressBarExamples = require('./uiElements/progressBar/examples');
var RangeSliderExamples = require('./uiElements/rangeSlider/examples');
var SearchBarExamples = require('./uiElements/search/examples');
var SelectOptionsExamples = require('./uiElements/selectOptions/examples');
var StarRatingExamples = require('./uiElements/starRating/examples');
var TagExamples = require('./uiElements/tag/examples');
var ToggleExamples = require('./uiElements/toggle/examples'); 

var Container = React.createClass({ 
/* THE FUNCTIONS BELOW ARE MADE UP OF FAKE DATA TO SHOW THE WORKING FUNCTIONALLITY OF THE COMPONENTS */
    
    getInitialState: function() {
        return {}
    },

    //This renders all the components and allows you too pass in all the neccasary props.
    render: function() {

        return (         
            <div>
                <ActionBarExamples/>
                <ButtonGroupExamples/> 
                <ButtonExamples/>
                <CardExamples/>
                <CheckListItemExamples/>
                <ChipExamples/>
                <CollectionItemExamples/>
                <CssBorderRadiusSelectorExamples/>
                <CssBorderSelectorExamples/>
                <CssValueExamples/>
                <DropDownExamples/>
                <FolderExamples/>
                <ListItemsExamples/>
                <LoadingExamples/>
                <MessageExamples/>
                <PaginationExamples/>
                <ProgressBarExamples/>
                <RangeSliderExamples/>
                <SearchBarExamples/>
                <SelectOptionsExamples/>
                <StarRatingExamples/> 
                <TagExamples/>
                <ToggleExamples/>
            </div> 
        );
    }

});

module.exports = Container;
