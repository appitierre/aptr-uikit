var React = require('react');
var CssValue = require('./cssValue');
var CssSelector = require('./cssSelector');

var Editor = React.createClass({

    render: function() {
        return (
            <div>
                <CssValue
                    unit={this.props.unit}
                    value={this.props.width}
                    onChange={this.props.onWidthChanged}
                    onIncrease={this.props.onWidthIncrease}
                    onBigIncrease={this.props.onMajorWidthIncrease}
                    onDecrease={this.props.onWidthDecrease}
                    onBigDecrease={this.props.onMajorWidthDecrease}
                />
                <CssSelector />
            </div>
        );
    }

});

export default Editor;