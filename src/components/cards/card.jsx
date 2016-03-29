var React = require('react');

/* 
PROPS:
Title: String
Body: String
className: String 
onClick: Function
Image: String 
*/

var Card = React.createClass({

	render: function() {
	console.log(this.props)	
		return (
			<div className={this.props.className} onClick={this.props.onClick}>
				<div className="asset-display-inner">
					<img src={this.props.image}></img>
				</div>
				<div>
					{this.props.title}
				</div>
					{this.props.body}	
			</div>
		);
	}

});

module.exports = Card;