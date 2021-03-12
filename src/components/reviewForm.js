import React from 'react';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Some content."
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("Textarea Content:  " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="movieReview container" style={{border: "1px solid black", textAlign: "center", alignContent: "center"/* , display: "inline" */}}>
                <h3>Movie Review</h3>
                <form onSubmit={() => this.handleSubmit}>
                    <label htmlFor="name">Name:  </label>
                    <input id="name" type="text" name="name"></input><br></br>
                    <label htmlFor="date">Date:  </label>
                    <input id="date" type="date" name="date"></input><br></br>
                    <label htmlFor="review">Review:  </label>
                    <textarea cols="100" rows="10" value={this.state.value} onChange={this.handleChange} id="review" type="review" name="review"></textarea><br></br>
                    <input type="submit" value="Submit Review"></input>
                    <p>{this.state.value}</p>
                </form>
            </div>
        )
    }
}

//* // e('div', {className: "container"/* , textAlign: 'center', alignContent: 'center', display: 'inline-block', style={{border: '1px solid black'}}*/
// e('h3', null, "Log In"),
// e('form', {className: "loginForm"},
//     e('label', {for: "userName"}, "User Name:  "),
//     e('input', {id: "userName", type: "text", name: "userName", value: "<username>"},null),
//     <br></br>,
//     e('label', {for: "password"}, "Password:  "),
//     e('input', {id: "password", type: "text", name: "password", value: "<password>"},null),
//     <br></br>,
//     e('input', {type: "submit", value: "Submit"},null) */}