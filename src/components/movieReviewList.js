import React from 'react';
import MovieReviewCard from './movieReviewCard';

export default class MovieReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (                    //This is the JSX method
            <div className="card w-75">
                <div>
                    <MovieReviewCard />
                </div>
                <div className="card-header bg-primary text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    This is where our Post goes
                </div>
                <div className="card-footer">
                </div>
            </div>
        );
    }
}