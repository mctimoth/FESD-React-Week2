import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';

// let e = React.createElement;

export default class MovieReviewPostReply extends React.Component {
    render() {
        return(
            <div className="card w-75">
                <div className="card-header bg-success text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    This Is Where Our Comment Goes
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                </div>
            </div>
        );
        // return e('div',
        //         {class: 'card w-75'},
        //     e('div',
        //         {class: 'card-header bg-success text-white'},
        //         'Username and Time'),
        //     e('div',
        //         {class:  'card-body'},
        //         'Comment Content Goes Here'),
        //     e('div',
        //         {class: 'card-footer'},
        //         e(LikeButton, {}, null),
        //         e('span', {}, ' '),  //A space between buttons
        //         e(ReplyButton, {}, null)
        //     )
        // );
    }
}