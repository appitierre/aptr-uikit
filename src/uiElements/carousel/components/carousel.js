var React = require('react');
var CarouselItem = require('./carouselItem');
var FlatButton = require('../../buttons/components/flatButton');                        

var Carousel = React.createClass({

    renderTitle: function() {
        if (this.props.title) {
            return (
                <div className="carousel-title">
                    {this.props.title}
                </div>
            );
        }
    },

    renderItems: function() {
        return _.map(this.props.items, (item) => {
            return (
                <CarouselItem
                    key={item._id}
                    item={item}
                />
            );
        });
    },

    renderViewMoreButton: function() {
        if (this.props.shouldShowViewMoreButton) {
            return (
                <FlatButton
                    className="carousel-view-more-button"
                    onClick={this.props.onViewMoreClicked}
                    icon={this.props.viewMoreIcon}
                    text={this.props.viewMoreText}
                />
            );
        }
    },

    render: function() {
        var itemsLength = this.props.items.length;

        if (this.props.shouldShowViewMoreButton) {
            itemsLength ++;
        }

        var width = itemsLength * (230 + 16);

        return (
            <div className="carousel">
                {this.renderTitle()}
                <div className="carousel-scroll-container" ref="scrollContainer">
                    <div className="carousel-scroll clearfix" style={{width: width + 'px'}}>
                        {this.renderItems()}
                        {this.renderViewMoreButton()}
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Carousel;