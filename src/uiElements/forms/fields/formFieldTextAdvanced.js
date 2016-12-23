var React = require('react');
var _ = require('lodash');
var ReactDOM = require('react-dom');
var registerType = require('../helpers').registerType;

var FormFieldTextAdvanced = React.createClass({

    propTypes: {
        label: React.PropTypes.string,
        help: React.PropTypes.string,
        value: React.PropTypes.string
    },

    // Lifecycle
    // =========

    componentDidMount: function() {
        var el = ReactDOM.findDOMNode(this.refs.mediumEditor);
        var toolBar = ReactDOM.findDOMNode(this.refs.mediumToolbar);

        el.innerHTML = this.props.value || '';

        this.editor = new MediumEditor(el, {
            anchorInputPlaceholder: 'Type a link',
            targetBlank: true,
            placeholder:false,
            toolbar: {
                buttons: [
                    {
                        name:'bold',
                        contentDefault:'',
                        classList: ['icon', 'icon-bold']
                    },
                    {
                        name:'italic',
                        contentDefault:'',
                        classList: ['icon', 'icon-italic']
                    },
                    {
                        name:'underline',
                        contentDefault:'',
                        classList: ['icon', 'icon-underline']
                    }, 
                    {
                        name:'subscript',
                        contentDefault:'x<sub>1</sub>'
                    },
                    {
                        name:'superscript',
                        contentDefault:'x<sup>1</sup>'
                    },
                    {
                        name:'justifyLeft',
                        contentDefault:'',
                        classList: ['icon', 'icon-text-align-left']
                    },
                    {
                        name:'justifyCenter',
                        contentDefault:'',
                        classList: ['icon', 'icon-text-align-center']
                    },
                    {
                        name:'justifyRight',
                        contentDefault:'',
                        classList: ['icon', 'icon-text-align-right']
                    },
                    {
                        name:'justifyFull',
                        contentDefault:'',
                        classList: ['icon', 'icon-text-align-justify']
                    },
                    {
                        name:'removeFormat',
                        contentDefault:'',
                        classList: ['icon', 'icon-text-format-remove']
                    }
                ],
                static: true,
                align: 'left',
                updateOnEmptySelection: true
            },
            delay: 1000,
            imageDragging: false
        });

        this.editor.subscribe('editableInput', this.onEditorChange);
    },

    shouldComponentUpdate: function() {
        return false;
    },

    componentWillUnmount: function() {
        this.editor.destroy();
    },

    // Instance Methods
    // ================

    onEditorChange: function(event) {
        var el = ReactDOM.findDOMNode(this.refs.mediumEditor);
        var value = el.innerHTML;
        if (value === '<p><br></p>') {
            value = '';
        }
        this.updateField(value);
    },

    updateField: _.debounce(function(value) {
        this.props.updateField(value);
    }, 1200, {leading: false}),

    // Render
    // ======

    render: function() {
        return (
            <fieldset className="forms-fieldset">

                <label className="forms-label">
                    {this.props.label}
                </label>

                <div className="forms-help">
                    {this.props.help}
                </div>

                <div 
                    className="forms-text-toolbar" 
                    ref="mediumToolbar" 
                    style={{
                        position: 'relative',
                        transform: 'translateY(-32px)'
                    }}/>
                <div className="forms-text-advanced" ref="mediumEditor"/>

                <div className="forms-error">
                    {this.props.error}
                </div>

            </fieldset>
        );
    }

});


registerType('Text:Advanced', FormFieldTextAdvanced);

module.exports = FormFieldTextAdvanced;