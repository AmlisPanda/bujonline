import React, { Component } from 'react';

export class ListWidgetListItem extends Component {

    render() {

        let notation = [];
        if (this.props.listType == "2") {
            for (var i = 0; i < 5; i++) {
                notation.push(
                    (<i className="far fa-star fa-s"></i>)
                )
            }
        }

        return (
            <li className={this.props.listType == "1" ? "strikethroughItem" : ""}>
                <div >
                    {this.props.label}
                    <i className="iconDelete fas fa-trash fa-xs"></i>
                </div>
                {notation}
            </li>

        );
    }
}
