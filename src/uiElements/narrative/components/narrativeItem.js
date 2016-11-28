var React = require('react');

var NarrativeItem = React.createClass({

	getContent: function() {
	
		return {
			title: this.props.item.title,
			body: this.props.item.body,
			graphic: this.props.item._graphic.src
		}

	},

	renderIndicators: function() {
		var stage = this.props.stage;

		return _.times(this.props.length, function(index) {	
			var className = "narrative-slider-indicator-item";

			if (stage === index) {
				className = "narrative-slider-indicator-item selected"
			}

			return (
				<div className={className} key={index}>
				</div>
			);
		});

	},

	render: function() {
		return (
			<div className="narrative-slider-item" style={{width: this.props.width + 'px'}}>
				<div className="narrative-slider-graphic">
					<img src={this.props.item._graphic.src}/>
				</div>
				<div className="narrative-slider-indicators">
					{this.renderIndicators()}
				</div>	
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
			</div>
			
		);
	}

});

module.exports = NarrativeItem;