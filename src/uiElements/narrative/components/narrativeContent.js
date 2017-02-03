var React = require('react');

var NarrativeContent = React.createClass({

	render: function() {
		return (
			<div className="narrative-content">
				<div className="narrative-content-inner">
					<div className="narrative-content-item">
						<div className="narrative-content-item-title">
							<div className="narrative-content-item-title-inner" dangerouslySetInnerHTML={{__html: this.props.item.title}}>
							</div>
						</div>
						<div className="narrative-content-item-body">
							<div className="narrative-content-item-body-inner" dangerouslySetInnerHTML={{__html: this.props.item.body}}>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = NarrativeContent;