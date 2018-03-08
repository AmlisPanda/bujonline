import React, { Component } from 'react';

export class Widget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cn: "widget " + this.props.cn,
			title: this.props.title,
			description: this.props.description,
			width: this.props.w || 400,
			height: this.props.h || 400
		}
	}

	render() {
		return (
			<div className={this.state.cn} style={{width: this.state.width, height: this.state.height}}>
				<div className="grip">
					<i className="fas fa-expand-arrows-alt" title="Agrandir"></i>
					<i className="fas fa-cog" title="Configurer"></i>
					<i className="fas fa-trash" title="Supprimer"></i>
				</div>
				<header>
					<h2>{this.state.title}</h2>
					<p className="description">{this.state.description}</p>
					<i className="widgetFav fa-heart far fa-lg"></i>
				</header>
				<div className="widgetContent">{this.props.children}</div>
			</div>
		)
	}
}

export class TextWidget extends Component {
	static cn = "textWidget";
	render() {
		return (
			<Widget title={this.props.title} description={this.props.description} cn={TextWidget.cn} w="600" h="200">
				<p dangerouslySetInnerHTML={{__html: this.props.html}}></p>
			</Widget>

		);
	}
}

export class ImageWidget extends Component {
	static cn = "imageWidget";
	render() {
		return (
			<Widget title={this.props.title} description={this.props.description} cn={ImageWidget.cn}>
				<img src={this.props.imageUrl} alt={this.props.title} title={this.props.title}  />
			</Widget>

		);
	}
}
