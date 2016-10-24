var React = require('react');
var CssValue = require('./cssValue');
var CssBorderSelector = require('./CssBorderSelector');
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
                <CssBorderSelector 
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
                <CssBorderRadiusSelector 
                    topLeft={this.props.topLeft}
                    topRight={this.props.topRight}
                    bottomRight={this.props.bottomRight}
                    bottomLeft={this.props.bottomLeft}
                    onChange={this.props.onRadiusSelectorChanged}
                />
            </div>
        );
    }
});

export default Editor;