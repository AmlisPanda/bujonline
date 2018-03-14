import React, { Component } from 'react';
import { Widget } from './Widget.js';

export class TimerWidget extends Component {
	static cn = "timerWidget";
	render() {
		return (
			<Widget title={this.props.title} description={this.props.description} cn={TimerWidget.cn} isLoggedIn={this.props.isLoggedIn} >
				<div className="timerText">
                    J-7
                </div>
			</Widget>

		);
	}
}
