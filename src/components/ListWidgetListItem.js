import React, { Component } from 'react';

export class ListWidgetListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            note: 3,
            isStrikeThrough: false
        }
        this.starMouseOver = this.starMouseOver.bind(this);
        this.starMouseClick = this.starMouseClick.bind(this);
        this.strikeout = this.strikeout.bind(this);
    }

    starMouseOver(e) {
        const target = e.target;
        const index = target.getAttribute("data-index");
    }
    starMouseClick(e) {
        const target = e.target;
        const index = target.getAttribute("data-index");
        if (this.props.listType == "2") {
            this.setState({
                note: parseInt(index) + 1
            })
        }
    }

    strikeout(e) {
        if (this.props.listType == "1") {
            this.setState({
                isStrikeThrough: !this.state.isStrikeThrough
            })
        }
    }

    render() {
        let notation = [];
        if (this.props.listType == "2") {
            for (var i = 0; i < 5; i++) {
                notation.push(
                    (<i
                        className={"far fa-star " + (i < this.state.note ? "fas" : "far")}
                        onMouseOver={this.starMouseOver}
                        onClick={this.starMouseClick}
                        data-index={i}></i>)
                )
            }
        }

        return (
            <li className={this.props.listType == "1" ? "strikethroughItem" : ""}>
                <div className={this.state.isStrikeThrough ? "strikethrough" : ""} onClick={this.strikeout}>
                    {this.props.label}
                    <i className="iconDelete fas fa-trash fa-xs"></i>
                </div>
                {notation}
            </li>

        );
    }
}
