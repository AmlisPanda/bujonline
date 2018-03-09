import React, { Component } from 'react';
import { MenuItem } from './MenuItem.js'

export class Menu extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  selectedIndex: props.selectedItem
		}
	  }

	render() {
		return (
			<nav id="nav">
				<MenuItem label="Accueil" isSelected={this.state.selectedIndex === '0'} />
				<MenuItem label="Mode jour" isSelected={this.state.selectedIndex === '1'} />
				<MenuItem label="Mode semaine" isSelected={this.state.selectedIndex === '2'} />
				<MenuItem label="Mode mois" isSelected={this.state.selectedIndex === '3'} />
				<MenuItem label="Mode année" isSelected={this.state.selectedIndex === '4'} />
			</nav>
		);
	}
}
