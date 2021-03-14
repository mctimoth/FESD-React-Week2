import React from 'react';
import SubmitReviewButton from './submit-review-button';

// let e = React.createElement;

export default class MovieReviewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: ""
        };
    }

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
                    <span onClick={this.props.addReview}><SubmitReviewButton /></span>
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