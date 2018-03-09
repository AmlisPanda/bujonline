import React, { Component } from 'react';
import { FormField } from './FormField.js'

export class LoginForm extends Component {
    render() {
        return (
            <form>
                <h2>Connexion</h2>
                <FormField label="Adresse mail"  type="text" />
                <FormField label="Mot de passe"  type="password" />
                <button>Se connecter</button>
            </form>

        );
    }
}
