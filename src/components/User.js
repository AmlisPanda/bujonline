import React, { Component } from 'react';

export class User extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  	  login: "Amlis"
  	}
  }

	render() {

		return (
            <div id="userBlock">
                Bienvenue <span>{this.state.login}</span>
            </div>
		);
	}
}
