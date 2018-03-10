import React, { Component } from 'react';
import { CreateWidgetForm } from './CreateWidgetForm.js'

export class Popup extends Component {

    constructor(props) {
       super(props);
       this.formClick = this.formClick.bind(this);
    }

    formClick(e) {
        e.stopPropagation();
    }

    render() {
        return(
            <div id="popupContainer" className={this.props.active ? "active" : ""} onClick={this.props.handlerTogglePopup}>

                <form onClick={this.formClick}>
                    <a title="Fermer" className="closeButton" onClick={this.props.handlerTogglePopup}><i className="fa-2x fas fa-window-close"></i></a>

                    <CreateWidgetForm />
                </form>
            </div>
        )
    }
}
