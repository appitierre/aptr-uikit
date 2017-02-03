var React = require('react');

var FormFieldCondition = React.createClass({

    render: function() {

        if(!this.props.condition.text) {
            return null;
        }

        return (
            <div className="form-field">

                <div className="form-field-label">
                    {this.props.label}
                </div>

                <div className="form-field-help">
                    {this.props.help}
                </div>

                <div className="form-field-condition" dangerouslySetInnerHTML={{__html : this.props.condition.text}} />

            </div>

        );

    }

});


module.exports = FormFieldCondition;