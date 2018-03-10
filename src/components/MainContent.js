import React, { Component } from 'react';
import { WidgetsList } from './WidgetsList.js';
import { SubscribeForm } from './SubscribeForm.js';
import { LoginForm } from './LoginForm.js';

export class MainContent extends Component {

    render() {

        const isLoggedIn = this.props.isLoggedIn;

        let content = null;

        if (isLoggedIn) {
            content = <WidgetsList isLoggedIn={this.props.isLoggedIn} />
        }
        else {
            content = (
                <div id="homepageContent">
                    <SubscribeForm />
                    <LoginForm />
                </div>
            );
        }

        return (
            <div id="main">
                {content}
            </div>

        );
    }
}
