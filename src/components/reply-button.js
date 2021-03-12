import React from 'react';

export default class ReplyButton extends React.Component {
    render() {
        return <button className="btn btn-danger">Reply</button>; //JSX method
        // return React.createElement('button',{class: 'btn btn-primary'}, 'Reply'); //React.JS method
    }
}