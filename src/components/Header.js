import React, { Component } from 'react';
import logo from '../images/logo.jpg' // relative path to image
import { Menu } from './Menu.js'
import { UserConnection } from './UserConnection.js'
import { User } from './User.js'

export class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div id="logoTitle">
                    <img className="App-logo" src={logo} />
                    <h1 className="App-title">LegenDiary</h1>
                </div>

              {this.props.isLoggedIn &&
                  (<User handlerLogout={this.props.handlerLogout} />)
              }

              {this.props.isLoggedIn &&
                  <Menu selectedItem="0" isLoggedIn={this.props.isLoggedIn} />
              }

            </header>
        )
    }
}
