import React from 'react';

export default class ReviewsButton extends React.Component {
    render() {
        return <button className="btn btn-danger">Reviews</button>; //JSX method
        // return React.createElement('button',{class: 'btn btn-primary'}, 'Reply'); //React.JS method
    }
}