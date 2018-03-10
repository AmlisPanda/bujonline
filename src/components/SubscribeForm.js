import React, { Component } from 'react';
import { FormField } from './FormField.js'

export class SubscribeForm extends Component {
    render() {
        return (
            <form id="subscribeForm">
                <h2>Inscris-toi pour commencer ton Bujo !</h2>
                <FormField label="Login" type="text" />
                <FormField label="Adresse mail"  type="text" />
                <FormField label="Mot de passe"  type="password" />
                <FormField label="Confirme ton mot de passe"  type="password" />
                <button className="buttonForm">S''inscrire</button>
            </form>
        );
    }
}
