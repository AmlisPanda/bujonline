import React, { Component } from 'react';

export class Popup extends Component {
    render() {
        return(
            <div id="popupContainer" className={this.props.active ? "active" : ""}>
                <form>
                </form>
            </div>
        )
    }
}
