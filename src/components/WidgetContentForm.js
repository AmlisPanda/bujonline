import React, { Component } from 'react';
import CKEditor from "react-ckeditor-component";

export class WidgetContentForm extends Component {

    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            content: '',
        }
    }

    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }

    render() {
        return(
            <CKEditor
               content={this.state.content}
              />
        )
    }
}
