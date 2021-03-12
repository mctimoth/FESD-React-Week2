import React from "react";


export default class reviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(`You clicked on a review card for ${this.props.title} (${this.props.id})`);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Title: {this.props.title}</p>
            </div>
        );
    }
}