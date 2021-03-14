import React from "react";

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            date:"",
            name:"",
            content:"",
            rating:0
        }
    }
}