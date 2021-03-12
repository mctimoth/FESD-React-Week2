import React from 'react';

export default class LikeButton extends React.Component {
    render() {
        return <button className="btn btn-primary">Like</button>;//This is the JSX method - JavaScript XML
        // return React.createElement('button',{class: 'btn btn-primary'}, 'Like'); //This the the React.JS method
    }
}