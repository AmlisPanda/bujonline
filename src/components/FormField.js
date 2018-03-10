import React, { Component } from 'react';

export class FormField extends Component {
    render() {

        let input = null;

        if (this.props.type === "text")
            input = <input type="text" />
        else if (this.props.type === "password")
            input = <input type="password" />

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
