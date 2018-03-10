import React, { Component } from 'react';
import { FormField } from './FormField.js'
import { WidgetContentForm } from './WidgetContentForm.js'

export class CreateWidgetForm extends Component {
    render() {
        return(
            <div>
                <h2>Crée ton widget</h2>
                <FormField label="Titre" type="text" />
                <FormField label="Description" type="text" />
                <section>
                    <FormField label="Type de widget" type="select">
                        <option value="0">Texte</option>
                        <option value="1" disabled>Image</option>
                        <option value="2" disabled>Liste</option>
                    </FormField>
                    <FormField label="Mode d'affichage" type="select">
                        <option value="0">Permanent</option>
                        <option value="1">En mode jour</option>
                        <option value="2">En mode semaine</option>
                        <option value="3">En mode mois</option>
                        <option value="4">En mode année</option>
                    </FormField>
                    <FormField label="Confidentialité" type="select">
                        <option value="0">Seulement moi</option>
                        <option value="1">Public</option>
                    </FormField>
                </section>

                <WidgetContentForm />
                
                <button className="buttonForm">Créer</button>
            </div>
        )
    }
}
