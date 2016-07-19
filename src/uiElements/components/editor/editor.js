var React = require('react');
var CssValue = require('./cssValue');
var CssSelector = require('./cssSelector');
var CssBorderRadiusSelector = require('./CssBorderRadiusSelector')

var Editor = React.createClass({

    render: function() {
        return (
            <div>
                <CssValue
                    unit={this.props.unit}
                    value={this.props.width}
                    onChange={this.props.onWidthChanged}
                    onIncrease={this.props.onWidthIncrease}
                    onDecrease={this.props.onWidthDecrease}
                />
                <CssSelector 
                    top={this.props.top}
                    right={this.props.right}
                    bottom={this.props.bottom}
                    left={this.props.left}
                    onChange={this.props.onSelectorChanged}
                    topIcon="star"
                    rightIcon="star"
                    bottomIcon="star"
                    leftIcon="star"
                    centreIcon="moon"
                />
                <CssBorderRadiusSelector />
            </div>
        );
    }

});

export default Editor;