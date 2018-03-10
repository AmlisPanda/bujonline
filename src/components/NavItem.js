import React, { Component } from 'react';

export class NavItem extends Component {
    render() {
        return (
            <a onClick={this.props.handlerClick}>
                <i className={this.props.iconCn}></i>
                <span>{this.props.label}</span>
            </a>
        );
    }
}
