import React, { Component } from 'react';
import { Menu } from './Menu.js'
import { UserConnection } from './UserConnection.js'
import { User } from './User.js'

export class Header extends Component {
    render() {
        return (
            <header className="App-header">
              <i className="fas fa-sun fa-2x App-logo fa-spin"></i>
              <h1 className="App-title">BujOnline</h1>
              {this.props.isLoggedIn ?
                  (<User handlerLogout={this.props.handlerLogout} />)
                  :
                  (<UserConnection handlerLogin={this.props.handlerLogin} />)
              }

              {this.props.isLoggedIn &&
                  <Menu selectedItem="0" isLoggedIn={this.props.isLoggedIn} />
              }

            </header>
        )
    }
}
