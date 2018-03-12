import React, { Component } from 'react';
import { Widget } from './Widget.js'
import { ListWidgetListItem } from './ListWidgetListItem.js'

export class ListWidget extends Component {
    constructor(props) {
       super(props);

       this.state = {
           items: [
               { order: 0, label: "Pain" },
               { order: 1, label: "Jambon" },
               { order: 2, label: "Tomates" },
            ],
           text: ""
       }

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();

        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const newItem = {
            order: this.state.items.length,
            label: this.state.text
        };
        this.setState(prevState => ({
          items: prevState.items.concat(newItem),
          text: ''
        }));
    }

    static cn = "listWidget";
    render() {

        let listItems = [];

        if (this.props.listType == "1") {
            listItems = [
                { order: 0, label: "Pain" },
                { order: 1, label: "Jambon" },
                { order: 2, label: "Tomates" }
            ]
        }
        else if (this.props.listType == "2") {
            listItems = [
                { order: 0, label: "Minisizer" },
                { order: 1, label: "Black Panther" },
                { order: 2, label: "Maze runner" }
            ]
        }

        this.state.items = listItems;
        return (
            <Widget title={this.props.title} description={this.props.description} cn={ListWidget.cn} isLoggedIn={this.props.isLoggedIn} w="600" h="900" >
                <form onSubmit={this.handleSubmit}>
                    <div className="listTyping">
                        <input type="text" className="inputAddListValue" value={this.state.text} placeholder="Ajoute un item" onChange={this.handleChange} />
                        <button><i className="fas fa-plus fa-m"></i></button>
                    </div>

                    <ul>
                        {   this.state.items.map(item => (
                                <ListWidgetListItem key={item.order} label={item.label} listType={this.props.listType} />
                            ))
                        }
                    </ul>
                </form>

            </Widget>

        );
    }
}
