import React, { Component } from 'react';
import { Widget } from './Widget.js';

export class ImageWidget extends Component {
	static cn = "imageWidget";
	render() {
		return (
			<Widget title={this.props.title} description={this.props.description} cn={ImageWidget.cn} isLoggedIn={this.props.isLoggedIn} >
				<img src={this.props.imageUrl} alt={this.props.title} title={this.props.title}  />
			</Widget>

		);
	}
}
