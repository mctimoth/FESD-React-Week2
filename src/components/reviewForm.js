import React from 'react';
import RatingContainer from './ratingContainer';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            name: "",
            date: "",
            content: "Some content."
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.name});
    }

    handleDateChange(event) {
        this.setState({date: event.target.date});
    }

    handleTextAreaChange(event) {
        this.setState({content: event.target.content});
    }

    handleSubmit(event) {
        // alert("Textarea Content:  " + this.state.value);
        event.preventDefault();
        this.props.onSubmitForm(this.state.content);
    }

    render() {
        return (
            <div className="movieReview container" style={{border: "1px solid black", textAlign: "center", alignContent: "center"/* , display: "inline" */}}>
                <h3>{this.props.title} Review</h3>
                {/* {this.props.reviews.id} {this.props.reviews.name} {this.props.reviews.date} <br></br>
                {this.props.reviews.review} <br></br> */}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:  </label>
                    <input id="name" type="text" onChange={this.handleNameChange} name="name"></input><br></br>
                    <label htmlFor="date">Date:  </label>
                    <input id="date" type="date" onChange={this.handleDateChange} name="date"></input><br></br>
                    <label htmlFor="review">Review:  </label><br></br>
                    <textarea cols="25" rows="3" value={this.state.content} onChange={this.handleTextAreaChange} id="review" type="review" name="review"></textarea><br></br>
                    <input type="submit" value="Submit Review"></input>
                    <p>{this.state.content}</p>
                </form>
                    <RatingContainer />
            </div>
        )
    }
}