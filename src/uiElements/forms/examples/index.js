var React = require('react');
var Section = require('section');
import {Form, Helpers} from '../forms';

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
    },
    _score: {
        "type": "Number",
        "label": "Score"
    },
    _items: {
        "type": "Array",
        "label": "Items",
        "help": "",
        "itemType": "Object",
        "conditions": [],
        "validators": [],
        "addButtonText": "Add New Item",
        "deleteButtonText": "Delete Item",
        "itemTextAttribute": "title",
        "defaultPrefix": "Item",
        "subSchema": {
            "title": {
                "type": "Text",
                "label": "Item Title"
            },
            "body": {
                "type": "TextArea",
                "label": "Item Body"
            }
        }
    }
}

Helpers.registerCondition('shouldDisplayTitle', function(props, next) {
    if (!props.model._shouldDisplayTitle) {
        return next(true);
    } else {
        return next(false)
    }
})



var FormsExamples = React.createClass({

    getInitialState: function() {
        return {
            _shouldDisplayTitle: true,
            title: 'My First Title',
            body: 'Some body text...edit me',
            _items: []
        }
    },

    getComponents: function() {
        return [
            <Form 
                model={this.state} 
                schema={schema}
                onUpdate={this.onUpdate}
                title="Form Title"
            />,
            <div className="ui-kit-forms-example-data">
                <div className="ui-kit-forms-example-data-title">
                    Model Data
                </div>
                {this.renderModelData()}
            </div>
        ]
    },

    onUpdate: function(attributes, hasError, fieldKey) {

        if (fieldKey === '_items') {
            console.log(attributes);
        }

        return new Promise((resolve, reject) => {
            if (hasError) {
                return resolve();   
            }
            this.setState(attributes, function() {
                resolve()
            });
        });
    },

    onClick: function() {
        console.log("this has been clicked");
    },

    renderModelData: function() {
        return _.map(schema, (value, key) => {
            return (
                <div className="ui-kit-forms-example-data-body" key={key}>
                    {key + " : " + this.state[key]}
                </div>
            );
        })
    },

    render: function() {
        return (
            <div>
                <Section
                    title="Forms"
                    components={this.getComponents()}
                    shouldDisplayAsBlock={true}
                />
            </div>
        );
    }

});

module.exports = FormsExamples;