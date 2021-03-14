import React from "react";

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: "",
            synopsis: "",
            rating: 0,
            year: 0,
            poster: "",
            reviews: [],
            nextReviewId:1
        }
    }
}