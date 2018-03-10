import React, { Component } from 'react';
import 'normalize.css';
import './App.scss';
import { Header } from './Header.js'
import { Nav } from './Nav.js'
import { Popup } from './Popup.js';
import { Footer } from './Footer.js'
import { MainContent } from './MainContent.js';

class App extends Component {
    constructor(props) {
       super(props);
       this.state = {
         isUserConnected: false,
         popupActive: false
       }

       this.handlerLogin = this.handlerLogin.bind(this);
       this.handlerLogout = this.handlerLogout.bind(this);
       this.handlerTogglePopup = this.handlerTogglePopup.bind(this);
    }

    handlerLogin() {
        this.setState({ isUserConnected: true })
    }

    handlerLogout() {
        this.setState({ isUserConnected: false })
    }

    handlerTogglePopup(e) {

        e.stopPropagation();

        this.setState((prevState) => {
            return {popupActive: !prevState.popupActive}
        });
    }

    render() {

      const isLoggedIn = this.state.isUserConnected;

      return (
      <div className="App">

        <Header isLoggedIn={isLoggedIn} handlerLogout={this.handlerLogout} />

        <div id="container">
            <MainContent isLoggedIn={isLoggedIn} handlerLogin={this.handlerLogin} />

            <Popup active={this.state.popupActive} handlerTogglePopup={this.handlerTogglePopup} />

            {isLoggedIn &&
                <Nav handlerLogout={this.handlerLogout} handlerTogglePopup={this.handlerTogglePopup} />
            }
        </div>


        <Footer />
      </div>
    );
  }
}



export default App;
