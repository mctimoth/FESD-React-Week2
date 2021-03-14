import React from "react";
import SubmitReviewButton from "./submit-review-button";

export default class MovieReviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews,
            content: props.content
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(`You clicked the SubmitReviewButton for ${this.props.title}`)
    }

    render() {
        return (
            <div style={{display: "inline-block", padding: "0px 50px"}}>
                <h3>Title:  {this.props.title}</h3>
                <img src={this.props.poster} alt={this.props.title + " Poster"} />
                <br></br>
                <span onClick={this.handleClick}><SubmitReviewButton /></span>
            </div>
        );
    }
}