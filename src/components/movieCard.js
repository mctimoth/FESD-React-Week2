import React from "react";
import MovieReviewCard from "./movieReviewCard";
import ReviewForm from "./reviewForm";
import ReviewsButton from "./reviews-button";

export default class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            content: this.props.content,
            rating: 0,
            year: this.props.year,
            poster: this.props.poster,
            reviews: this.props.reviews,
            showReviews: false,
            selected: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }


    handleClick() {
        // console.log(`You clicked the ReviewsButton for ${this.props.title}`)
        this.setState({showReviews: true, selected: true});
        this.props.onReviewsButtonClick(this.state.id);
        console.log(this.state.id);
        
        // reviews.push()
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
        let inAReview = false;
        while (!inAReview) {
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
        inAReview = true; 
        <MovieReviewCard />
    }
}