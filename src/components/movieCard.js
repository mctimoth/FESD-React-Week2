import React from "react";
import ReviewsButton from "./reviews-button";

export default class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(`You clicked the ReviewsButton for ${this.props.title}`)
    }

    render() {
        return (
            <div style={{display: "inline-block", padding: "0px 50px"}}>
                <h3>Title:  {this.props.title}</h3>
                <img src={this.props.poster} alt={this.props.title + " Poster"} />
                <br></br>
                <span onClick={this.handleClick}><ReviewsButton /></span>
            </div>
        );
    }
}