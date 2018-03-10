import React, { Component } from 'react';
import { NavItem } from './NavItem.js'

export class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popupActive: false
        }
    }


    render() {
        return (
            <nav id="toolsNav">
                <NavItem iconCn="fas fa-plus fa-4x" label="Nouveau widget" handlerClick={this.props.handlerTogglePopup} />
                <NavItem iconCn="fas fa-user-circle fa-4x" label="Mon profil" />
                <NavItem iconCn="far fa-star fa-4x" label="Préférences" />
                <NavItem iconCn="fas fa-share-alt fa-4x" label="Partager" />
                <NavItem iconCn="fas fa-sign-out-alt fa-4x red" label="Se déconnecter" handlerClick={this.props.handlerLogout} />
            </nav>
        );
    }
}
