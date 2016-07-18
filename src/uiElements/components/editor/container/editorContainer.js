import React from 'react';
import Editor from '../editor';

var EditorContainer = React.createClass({

    getInitialState: function() {
        return {
            width: 100,
            unit: "PX"
        }
    },

    onWidthChanged: function(value) {
        this.setState({
            width: value
        })
    },

    onWidthIncrease: function() {  
        if (isNaN(this.state.value)) {
            if (this.state.value === "auto") {
                this.onWidthChanged("auto")
            } else {
                this.onWidthChanged(0)
            }
        } else {
            this.setState({
                width: this.state.width + 1
            })
        }       
    },

    onMajorWidthIncrease: function() {
        this.setState({
            width: this.state.width + 10
        })
    },

    onWidthDecrease: function(scale) {
        this.setState({
            width: this.state.width - 1
        })
    },

    onMajorWidthDecrease: function() {
        this.setState({
            width: this.state.width - 10
        })
    },

    render: function() {
        return (
            <Editor 
                {...this.state}
                onWidthChanged={this.onWidthChanged}
                onWidthIncrease={this.onWidthIncrease}
                onMajorWidthIncrease={this.onMajorWidthIncrease}
                onWidthDecrease={this.onWidthDecrease}
                onMajorWidthDecrease={this.onMajorWidthDecrease}
            />
        );
    }

});

module.exports = EditorContainer;