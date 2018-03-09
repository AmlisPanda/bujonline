import React, { Component } from 'react';
import { FormField } from './FormField.js'

export class SubscribeForm extends Component {
    render() {
        return (
            <form>
                <h2>Inscription</h2>
                <FormField label="Login" type="text" />
                <FormField label="Adresse mail"  type="text" />
                <FormField label="Mot de passe"  type="password" />
                <FormField label="Confirme ton mot de passe"  type="password" />
                <button>S''inscrire</button>
            </form>
        );
    }
}
