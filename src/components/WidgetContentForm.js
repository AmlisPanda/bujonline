import React, { Component } from 'react';
import CKEditor from "react-ckeditor-component";
import { FormField } from './FormField.js'

export class WidgetContentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    render() {
        const contentType = this.props.contentType;
        let content = null;
        if (contentType == "0") {
            content = <CKEditor
                   content={this.state.content}
                  />
        }
        else if (contentType == "1") {
            content = (<input type="file" />)
        }
        else if (contentType == "2") {
            content =
            <FormField label="Type de liste" type="select">
                    <option value="0">Liste simple</option>
                    <option value="1">Todo-list</option>
                    <option value="2">Liste avec notation</option>
                    <option value="3">Liste de priorités</option>
            </FormField>
        }

        return(
            <div>
                {this.state.contentType}
                {content}
            </div>
        )
    }
}
