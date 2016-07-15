import React from 'react';
import Editor from '../editor';

var EditorContainer = React.createClass({

    getInitialState: function() {
        return {
            width: 72
        }
    },

    onWidthChanged: function(event) {
        this.setState({
            width: event.target.value
        })
    },

    onWidthIncrease: function() {
        this.setState({
            width: this.state.width + 1
        })
    },

    onWidthDecrease: function(scale) {
        this.setState({
            width: this.state.width - 1
        })
    },

    render: function() {
    console.log('gets here')
        return (
            <Editor 
                
                onWidthChanged={this.onWidthChanged}
                onWidthIncrease={this.onWidthIncrease}
                onWidthDecrease={this.onWidthDecrease}
            />
        );
    }

});

export default EditorContainer;