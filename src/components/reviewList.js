import React from "react";
import ReviewCard from './reviewCard.js';

const reviewsDB = [];

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        this.setState({ reviews: reviewsDB })
    }

    render() {
        const reviewCards = this.state.reviews.map(review => <ReviewCard {...review} key={review.id} />)
        return (
            <div>
                {reviewCards}
            </div>
        );
    }
}