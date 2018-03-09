import React, { Component } from 'react';
import './App.css';
import { TextWidget, ImageWidget} from './Components/Widgets.js';

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
        <header className="App-header">
          <i className="fas fa-sun fa-2x App-logo fa-spin"></i>
          <h1 className="App-title">BujOnline</h1>
          {isLoggedIn ?
              (<User handlerLogout={this.handlerLogout} />)
              :
              (<UserConnection handlerLogin={this.handlerLogin} />)
          }
		  <Menu selectedItem="0" />
        </header>

        <div id="main">
			<TextWidget
			  title="Citation du jour"
			  description="Confucius"
			  html="Exige beaucoup de toi-même et attends peu des <span style='color:red'>autres</span>. Ainsi beaucoup d'ennuis te seront épargnés."
			/>

			<ImageWidget
				title="Maki"
				description="Dans la neige"
				imageUrl="https://scontent.fymq3-1.fna.fbcdn.net/v/t1.0-9/28168678_10215894197850513_4587256288758179392_n.jpg?oh=3a19a33eb1aacd0126107d93e4fd4fbd&oe=5B453766"
			/>
        </div>

        {isLoggedIn &&
            <Nav handlerLogout={this.handlerLogout} />
        }

        <Footer />
      </div>
    );
  }
}

class UserConnection extends Component {
    render() {

        return (
            <div id="userBlock">
                <button>S''inscrire</button>
                <button onClick={this.props.handlerLogin}>Se connecter</button>
            </div>
        );
    }
}
class User extends Component {

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

class Menu extends Component {

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

class MenuItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  isSelected: props.isSelected || false
		}
	}
	render() {
		const selected = this.state.isSelected;
		return (
			<a href="#" className={selected ? 'active' : ''}>{this.props.label}</a>
		);
	}
}

class Nav extends Component {
    render() {
        return (
            <nav id="toolsNav">
                <a href="#"><i className="fas fa-plus fa-4x"></i><span>Nouveau widget</span></a>
                <a href="#"><i className="fas fa-user-circle fa-4x"></i><span>Mon profil</span></a>
                <a href="#"><i className="far fa-star fa-4x"></i><span>Préférences</span></a>
                <a href="#"><i className="fas fa-share-alt fa-4x"></i><span>Partager</span></a>
                <a onClick={this.props.handlerLogout} className="red"><i className="fas fa-sign-out-alt fa-4x"></i><span>Se déconnecter</span></a>
            </nav>
        );
    }
}

class NavItem extends Component {
    render() {
        return (
            <nav id="toolsNav">
                <a href="#"><i className="fas fa-plus fa-5x"></i><span>Nouveau widget</span></a>
            </nav>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer>
                <span>Copyright Panda</span></footer>
        );
    }
}


export default App;
