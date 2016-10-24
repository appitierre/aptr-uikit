import React from 'react';
import Editor from '../editor';

var EditorContainer = React.createClass({

    getInitialState: function() {
        return {
            width: 100,
            unit: "PX",
            top: false,
            right: false,
            bottom: false,
            left: false,
            topLeft: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false
        }
    },

    onWidthChanged: function(value) {
        this.setState({
            width: value
        });
    },

    onWidthIncrease: function(increaseBy) {  

        if (!_.isNumber(this.state.width)) {
            
            this.setState({
                width: 0
            });

            return;

        }

        this.setState({
            width: this.state.width + (1 * increaseBy)
        })
      
    },

    onWidthDecrease: function(decreaseBy) {
        this.setState({
            width: this.state.width - (1 * decreaseBy)
        })
    },

    onSelectorChanged: function(top, right, bottom, left) {
        console.log(arguments);
        this.setState({
            top: top,
            right: right,
            bottom: bottom,
            left: left
        })
    },

    onRadiusSelectorChanged: function(topLeft, topRight, bottomRight, bottomLeft) {
        console.log(arguments)
        this.setState({
            topLeft: topLeft,
            topRight: topRight,
            bottomRight: bottomRight,
            bottomLeft: bottomLeft
        })
    },

    render: function() {
        return (
            <Editor 
                {...this.state}
                onWidthChanged={this.onWidthChanged}
                onWidthIncrease={this.onWidthIncrease}
                onWidthDecrease={this.onWidthDecrease}
                onSelectorChanged={this.onSelectorChanged}
                onRadiusSelectorChanged={this.onRadiusSelectorChanged}
            />
        );
    }

});

module.exports = EditorContainer;