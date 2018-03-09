import React, { Component } from 'react';
import { TextWidget } from './TextWidget.js';
import { ImageWidget } from './ImageWidget.js';

export class WidgetsList extends Component {
    render() {
        return (
            <div id="widgetsList">
                <TextWidget
                  title="Citation du jour"
                  description="Confucius"
                  html="Exige beaucoup de toi-même et attends peu des <span style='color:red'>autres</span>. Ainsi beaucoup d'ennuis te seront épargnés."
                  isLoggedIn={this.props.isLoggedIn}
                />
                <ImageWidget
                    title="Maki"
                    description="Dans la neige"
                    imageUrl="https://scontent.fymq3-1.fna.fbcdn.net/v/t1.0-9/28168678_10215894197850513_4587256288758179392_n.jpg?oh=3a19a33eb1aacd0126107d93e4fd4fbd&oe=5B453766"
                    isLoggedIn={this.props.isLoggedIn}
                />
            </div>

        );
    }
}
