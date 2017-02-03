var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var _ = require('lodash');

var ToolTip = React.createClass({

    propTypes: {
        toolTipPosition: React.PropTypes.oneOf(['top', 'bottom']).isRequired,
        toolTip: React.PropTypes.string.isRequired
    },

    getInitialState: function() {
        return {
            toolTipPosition: null
        }
    },

    componentWillMount: function() {
        window.addEventListener('resize', this.onWindowResize);
    },

    componentWillUnmount: function() {
        window.removeEventListener('resize', this.onWindowResize);
    },

    componentDidMount: function() {
        this.setDefaultPosition();
    },

    setDefaultPosition: function() {

        var toolTipWidth = ReactDOM.findDOMNode(this.refs.tooltip).offsetWidth;
        var buttonWidth = ReactDOM.findDOMNode(this).offsetWidth;
        var overlap = toolTipWidth - buttonWidth;

        if(overlap > 0) {
            this._overlap = overlap / 2;
            this.setToolTipPosition();  
        }
    },

    setToolTipPosition: function() {
        if(!this._overlap) {
            return null;
        }

        var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        var windowWidth = window.innerWidth;
        var position = null;

        if((rect.right + this._overlap) >= windowWidth) {
            position = 'left';
        } else if((rect.left - this._overlap) <= 0) {
            position = 'right';
        }

        this.setState({
            toolTipPosition: position
        });
    },

    getClassName: function() {
        return classNames("tool-tip", {
            "tool-tip-top": this.props.toolTipPosition === 'top',
            "tool-tip-bottom": this.props.toolTipPosition === 'bottom',
            "tool-tip-left": this.state.toolTipPosition === 'left',
            "tool-tip-right": this.state.toolTipPosition === 'right'
        });
    },

    onWindowResize: _.debounce(function() {
        this.setToolTipPosition();       
    }, 300, {leading: false}),

    getToolTip:function() {
        return (
            <span className={this.getClassName()} key="tooltip" ref="tooltip">
                {this.props.toolTip}
            </span>
        );    
    },

    render: function() {

        if(!this.props.children) {
            return null;
        }

       return  React.cloneElement(this.props.children, {
        }, [this.getToolTip(), ...(this.props.children.props.children || [])]);
    }

});

module.exports = ToolTip;