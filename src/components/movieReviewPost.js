import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import MovieReviewPostReply from './movieReviewPostReply';

// let e = React.createElement;

export default class MovieReviewPost extends React.Component {
    render() {
        return (                    //This is the JSX method
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    This is where our Post goes
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                    <MovieReviewPostReply />
                    <MovieReviewPostReply />
                    <MovieReviewPostReply />
                </div>
            </div>
        );
        // return e('div',              //this it the React.js method
        //         {class: 'card w-75'},
        //     e('div',
        //         {class: 'card-header bg-success text-white'},
        //         'Username and Time'),
        //     e('div',
        //         {class:  'card-body'},
        //         'Post Content Goes Here'),
        //     e('div',
        //         {class: 'card-footer'},
        //         e(LikeButton, {}, null),
        //         e('span', {}, ' '),  //A space between buttons
        //         e(ReplyButton, {}, null),
        //         e('br', {}, null),
        //         e(Comment, {}, null),
        //         e(Comment, {}, null)
        //     )
        // );
    }
}