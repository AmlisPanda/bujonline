import React, { Component } from 'react';

import DatePicker from 'react-date-picker';

export class DatePickerField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        this.onChange = this.onChange.bind(this);

    }

    onChange = date => this.setState({ date })

    render() {

          return(
              <DatePicker
                  locale="fr-FR"
                  onChange={this.onChange}
                  value={this.state.date}
                />
          )
    }
}
