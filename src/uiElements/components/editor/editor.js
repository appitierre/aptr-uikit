var React = require('react');
var CssValue = require('./cssValue');

var Editor = React.createClass({

    render: function() {
        console.log(this.props);
        return (
            <div>
                <CssValue
                    value={this.props.width}
                    onChange={this.props.onWidthChanged}
                    onIncrease={this.props.onWidthIncrease}
                    onDecrease={this.props.onWidthDecrease}
                />
            </div>
        );
    }

});

export default Editor;