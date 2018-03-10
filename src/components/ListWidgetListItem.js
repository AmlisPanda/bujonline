import React, { Component } from 'react';

export class ListWidgetListItem extends Component {

    render() {
        return (
            <li>
                {this.props.label}
                <i className="iconDelete fas fa-trash fa-xs"></i>
            </li>

        );
    }
}
