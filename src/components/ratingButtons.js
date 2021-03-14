import React from 'react';

//This class creates the star(s) as noted in the render.
export default class RatingButtons extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.ratingTitle);
    }

    render() {
        return (
            <button
                className="btn btn-primary"
                onClick={this.handleClick}>
                {this.props.ratingTitle}
            </button>
        );
    }
}