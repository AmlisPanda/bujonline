import React, { Component } from 'react';
import { Widget } from './Widget.js';

export class TextWidget extends Component {
	static cn = "textWidget";
	render() {
		return (
			<Widget title={this.props.title} description={this.props.description} cn={TextWidget.cn} w="600" h="200" isLoggedIn={this.props.isLoggedIn}>
				<p dangerouslySetInnerHTML={{__html: this.props.html}}></p>
			</Widget>

		);
	}
}
