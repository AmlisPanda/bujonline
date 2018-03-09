import React, { Component } from 'react';
import './App.scss';
import { Header } from './Header.js'
import { Nav } from './Nav.js'
import { Footer } from './Footer.js'
import { MainContent } from './MainContent.js';

class App extends Component {
    constructor(props) {
       super(props);
       this.state = {
         isUserConnected: false
       }

       this.handlerLogin = this.handlerLogin.bind(this);
       this.handlerLogout = this.handlerLogout.bind(this);
    }

    handlerLogin() {
        this.setState({ isUserConnected: true })
    }

    handlerLogout() {
        this.setState({ isUserConnected: false })
    }

    render() {

      const isLoggedIn = this.state.isUserConnected;

      return (
      <div className="App">

        <Header isLoggedIn={isLoggedIn} handlerLogin={this.handlerLogin} handlerLogout={this.handlerLogout} />

        <MainContent isLoggedIn={isLoggedIn} />

        {isLoggedIn &&
            <Nav handlerLogout={this.handlerLogout} />
        }

        <Footer />
      </div>
    );
  }
}



export default App;
