import React from 'react';
import RatingButtons from './ratingButtons';

export default class RatingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratingTitle:"",
            rating: 0,
        };
    }

    render() {
        return (
            <div>
                <RatingButtons 
                    name="One Star"
                    ratingTitle={this.setState.ratingTitle="1 Star"}
                    rating={this.setState.rating=1}
                />
                <RatingButtons 
                    name="Two Stars"
                    ratingTitle={this.setState.ratingTitle="2 Stars"}
                    rating={this.setState.rating=2}
                />
                <RatingButtons
                    name="Three Stars"
                    ratingTitle={this.setState.ratingTitle="3 Stars"}
                    rating={this.setState.rating=3}
                />
                <RatingButtons
                    name="Four Stars"
                    ratingTitle={this.setState.ratingTitle="4 Stars"}
                    rating={this.setState.rating=4}
                />
                <RatingButtons
                    name="Five Stars"
                    ratingTitle={this.setState.ratingTitle="5 Stars"}
                    rating={this.setState.rating=5}
                />
            </div>
        );
    }
}