import React from "react";
import ReviewForm from "./reviewForm";
import ReviewsButton from "./reviews-button";

export default class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            id: 6,
            title: "",
            synopsis: "",
            rating: 0,
            year: 0,
            poster: "",
            reviews: this.props.reviews,
            showReviews: false
        }
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }


    handleClick() {
        // console.log(`You clicked the ReviewsButton for ${this.props.title}`)
        this.setState({showReviews: true});
    }
    renderReviews() {
        let reviews = [];
            this.state.showReviews && this.state.reviews.forEach((review) => {
                reviews.push(<div>{review.id} {review.name} {review.date} {review.content} {review.rating} </div>)
            })
        return reviews;
    }

    onSubmitForm(reviewContentFromForm) {
        console.log(reviewContentFromForm);
        this.setState({reviews: this.state.reviews.push(reviewContentFromForm)});
    }

    render() {
        console.log(this.state.showReviews);
        return (
           <div style={{display: "inline-block", padding: "0px 50px"}}>
                <h3>Title:  {this.props.title}</h3>
                <img src={this.props.poster} alt={this.props.title + " Poster"} />
                <br></br>
                <span onClick={this.handleClick}><ReviewsButton /></span>
                {this.renderReviews()}
                {this.state.showReviews && <ReviewForm onSubmitForm={this.onSubmitForm}/>}
            </div>
        );
    }
}