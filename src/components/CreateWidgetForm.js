import React, { Component } from 'react';
import { FormField } from './FormField.js'
import { WidgetContentForm } from './WidgetContentForm.js'

export class CreateWidgetForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            widgetType: 0
        }
        this.typeChange = this.typeChange.bind(this);
    }


    typeChange(e) {
        this.setState({ widgetType: e.target.value })
    }

    render() {
        return(
            <div>
                <h2>Crée ton widget</h2>
                <FormField label="Titre" type="text" />
                <FormField label="Description" type="text" />
                <section>
                    <FormField label="Type de widget" type="select" value={this.state.widgetType} changeHandler={this.typeChange}>
                        <option value="0">Texte</option>
                        <option value="1">Image</option>
                        <option value="2">Liste</option>
                        <option value="3">Mood tracker</option>
                    </FormField>
                    <FormField label="Date" type="datepicker"></FormField>
                    <FormField label="Confidentialité" type="select">
                        <option value="0">Seulement moi</option>
                        <option value="1">Public</option>
                    </FormField>
                </section>

                <WidgetContentForm contentType={this.state.widgetType}/>

                <button className="buttonForm">Créer</button>
            </div>
        )
    }
}
