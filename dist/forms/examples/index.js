'use strict';

var _forms = require('../forms');

var React = require('react');
var Section = require('section');


var schema = {
    "_shouldDisplayTitle": {
        "type": "Boolean",
        "label": "Should Display The Title?"
    },
    title: {
        "type": "Text",
        "label": "Course Title",
        "help": "This title will be displayed where ever there's a course",
        "conditions": [{
            "type": "shouldDisplayTitle",
            "text": "Toggle the above switch to edit me"
        }],
        "validators": ["required"]
    },
    body: {
        "type": "TextArea",
        "label": "Course Body",
        "help": "",
        "conditions": [],
        "validators": []
    }
};

console.log(_forms.Helpers);

_forms.Helpers.registerCondition('shouldDisplayTitle', function (props, next) {
    if (!props.model._shouldDisplayTitle) {
        return next(true);
    } else {
        return next(false);
    }
});

var FormsExamples = React.createClass({
    displayName: 'FormsExamples',


    getInitialState: function getInitialState() {
        return {
            _shouldDisplayTitle: true,
            title: 'My First Title',
            body: 'Some body text...edit me'
        };
    },

    getComponents: function getComponents() {
        return [React.createElement(_forms.Form, {
            model: this.state,
            schema: schema,
            onUpdate: this.onUpdate,
            title: 'Form Title'
        }), React.createElement(
            'div',
            { className: 'ui-kit-forms-example-data' },
            React.createElement(
                'div',
                { className: 'ui-kit-forms-example-data-title' },
                'Model Data'
            ),
            this.renderModelData()
        )];
    },

    onUpdate: function onUpdate(attributes, hasError, fieldKey) {
        var _this = this;

        return new Promise(function (resolve, reject) {
            if (hasError) {
                return resolve();
            }
            _this.setState(attributes, function () {
                resolve();
            });
        });
    },

    onClick: function onClick() {
        console.log("this has been clicked");
    },

    renderModelData: function renderModelData() {
        var _this2 = this;

        return _.map(schema, function (value, key) {
            return React.createElement(
                'div',
                { className: 'ui-kit-forms-example-data-body', key: key },
                key + " : " + _this2.state[key]
            );
        });
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Section, {
                title: 'Forms',
                components: this.getComponents(),
                shouldDisplayAsBlock: true
            })
        );
    }

});

module.exports = FormsExamples;