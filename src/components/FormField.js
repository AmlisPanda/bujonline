import React, { Component } from 'react';

export class FormField extends Component {
    render() {

        let input = null;

        if (this.props.type === "text")
            input = <input type="text" />
        else if (this.props.type === "password")
            input = <input type="password" />
        else if (this.props.type === "select") {
            input = (
                <select>
                    {this.props.children}
                </select>

            );
        }

        return (
            <div className="field">
                <label>
                    {this.props.label}
                    {input}
                </label>
            </div>

        );
    }
}
