import React from 'react';

// let e = React.createElement;

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="loginForm container" style={{border: "1px solid black", textAlign: "center", alignContent: "center"/* , display: "inline" */}}>
                <h3>Log In</h3>
                <form>
                    <label htmlFor="userName">User Name:  </label>
                    <input id="userName" type="text" name="userName"/*  value= "<username>" */></input><br></br>
                    <label htmlFor="password">Password:  </label>
                    <input id="password" type="password" name="password"/*  value= "<password>" */></input><br></br>
                    <input type="submit" value="Login"></input>
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