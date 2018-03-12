import React, { Component } from 'react';
import { DatePickerField } from './DatePickerField.js'

export class FormField extends Component {
    render() {

        let input = null;

        if (this.props.type === "text")
            input = <input type="text" onChange={this.props.changeHandler} />
        else if (this.props.type === "password")
            input = <input type="password" onChange={this.props.changeHandler} />
        else if (this.props.type === "select") {
            input = (
                <select value={this.props.value} onChange={this.props.changeHandler}>
                    {this.props.children}
                </select>

            );
        }
        else if (this.props.type === "datepicker") {
            input = <DatePickerField onChange={this.props.changeHandler}></DatePickerField>
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
