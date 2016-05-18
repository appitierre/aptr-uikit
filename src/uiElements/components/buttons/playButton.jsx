var React = require('react');

var PlayButton = React.createClass({

	getButtonClassName: function() {
        var className = 'button button-play';
        if (this.props.type) {
            className += " " + this.props.type;
        } 
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return className;
    },	

	render: function() {
	console.log('play button rendered')
		return (
			<button onClick={this.props.onClick} className={this.getButtonClassName()}>
				<i className="icon icon-play-circle" />
			</button>
		);
	}

});

module.exports = PlayButton;