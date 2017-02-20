var React = require('react');
var FlatButton = require('../../buttons/components/flatButton');

var CarouselItem = React.createClass({

    getGraphicStyle: function() {
        var backgroundImage = 'url("' + this.props.item.graphic + '")';

        return {
            backgroundImage: backgroundImage
        }
    },

    renderGraphic: function() {
        if (this.props.item.graphic) {
            return (
                <div 
                    className="carousel-item-graphic" 
                    onClick={() => this.props.item.onClick(this.props.item)}
                    style={this.getGraphicStyle()}>
                </div>
            );
        }
    },

    renderTitle: function() {
        if (this.props.item.title) {
            return (
                <FlatButton
                    text={this.props.item.title}
                    onClick={() => this.props.item.onClick(this.props.item)}
                    type="primary"
                    className="carousel-item-title"
                />
            );
        }
    },

    renderActions: function() {
        if (this.props.item.actions) {
            return (
                <div className="carousel-item-actions">
                    {this.renderActionsButtons()}
                </div>
            );
        }
    },

    renderActionsButtons: function() {
        return _.map(this.props.item.actions, function(action) {
            console.log(action.icon);
            return (
                <FlatButton
                    className="carousel-item-actions-button"
                    icon={action.icon}
                    text={action.text}
                    type={action.type}
                    onClick={action.onClick}
                />
            );
        });
    },

    render: function() {

        return (
            <div className="carousel-item">
                
                {this.renderGraphic()}
                
                <div className="carousel-item-content">
                    {this.renderTitle()}
                    {this.renderActions()}
                </div>

                {/*<div style={{borderBottom: "1px solid #000"}}>
                    Recommendation Score: {this.props.item._recommendationScore}
                </div>
                <div>
                    Newest Score: {this.props.item._newestScore}
                </div>
                <div>
                    Newest Recommendation Score: {this.props.item._newestRecommendationScore}
                </div>
                <div>
                    Updated Days Ago: {this.props.item._updatedDaysAgo}
                </div>*/}
            </div>
        );
        
    }

});

module.exports = CarouselItem;