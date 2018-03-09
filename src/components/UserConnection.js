import React, { Component } from 'react';

export class UserConnection extends Component {
    render() {

        return (
            <div id="userBlock">
                <button>S''inscrire</button>
                <button onClick={this.props.handlerLogin}>Se connecter</button>
            </div>
        );
    }
}
