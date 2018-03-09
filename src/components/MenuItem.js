import React, { Component } from 'react';

export class MenuItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  isSelected: props.isSelected || false
		}
	}
	render() {
		const selected = this.state.isSelected;
		return (
			<a className={selected ? 'active' : ''}>{this.props.label}</a>
		);
	}
}
