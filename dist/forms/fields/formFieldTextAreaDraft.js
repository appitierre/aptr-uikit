'use strict';

var _draftJs = require('draft-js');

var React = require('react');
var registerType = require('../helpers').registerType;


var FormFieldTextAreaDraft = React.createClass({
    displayName: 'FormFieldTextAreaDraft',


    getInitialState: function getInitialState() {
        return {
            editorState: _draftJs.EditorState.createEmpty()
        };
    },

    onChange: function onChange(editorState) {
        this.setState({ editorState: editorState });
    },

    render: function render() {
        var editorState = this.state.editorState;

        return React.createElement(_draftJs.Editor, { editorState: editorState, onChange: this.onChange });
    }

});

registerType('TextArea:Draft', FormFieldTextAreaDraft);

module.exports = FormFieldTextAreaDraft;