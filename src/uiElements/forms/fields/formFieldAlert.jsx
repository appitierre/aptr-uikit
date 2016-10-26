var React = require('react');
var classnames = require('classnames');
var Evolve = require('evolve');
var registerType = require('../helpers').registerType;

var FormFieldAlert = React.createClass({

    propTypes: {
        label: React.PropTypes.string,
        help: React.PropTypes.string,
        _alertType: React.PropTypes.string.isRequired,
        videoSrc: React.PropTypes.string
    },

    // DOM events
    // ==========

    onShowVideoClicked: function(event) {
        event.preventDefault();
        event.currentTarget.blur();
        Evolve.hub.trigger('guide:showVideo', this.props.videoSrc);
    },

    // Render
    // ======

    getAlertClassName: function() {
        return classnames('forms-alert forms-alert-type-' + this.props._alertType, {
            'button-padding': this.props._alertType === 'video'
        });
    },

    renderIcon: function() {
        var iconClass = 'icon';
        
        switch (this.props._alertType) {
            case 'warning':
                iconClass += ' icon-warning';
                break;
            case 'hint':
                iconClass += ' icon-question-circle';
                break;
            case 'idea':
                iconClass += ' icon-lamp';
                break;
            case 'video':
                iconClass += ' icon-film-play';
                break;
            case 'info':
                iconClass += ' icon-lamp';
                break;
            default:
                iconClass += ' icon-warning';
        }

        return (
            <i className={iconClass}/>
        );
    },

    renderVideoHelpButton: function() {
        if (this.props._alertType === 'video') {
            return (
                <button 
                    className="button alert-button alert-show-video" 
                    onClick={this.onShowVideoClicked}>
                    Show
                </button>
            );
        }
    },

    render: function() {
        
        return (
            <fieldset className="forms-fieldset">

                <div className={this.getAlertClassName()}>
                    {this.renderIcon()}

                    <div className="forms-label">
                        {this.props.label}
                    </div>

                    {this.renderVideoHelpButton()}
                </div>

            </fieldset>
        );

    }

});

registerType('Alert', FormFieldAlert);

module.exports = FormFieldAlert;