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
				<i className="far fa-2x fa-address-card"></i>
				<div id="content">
                    Bienvenue <span>{this.state.login}</span>
                    <button onClick={this.props.handlerLogout}>Se déconnecter</button>
                </div>
            </div>
		);
	}
}
