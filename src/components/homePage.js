import React from 'react';
import Instructions from './instructions.js';
import NavBar from './navBar.js'
import LoginForm from './loginForm.js';


// let e = React.createElement;

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="container">
                <Instructions />,
                <NavBar />,
                <LoginForm />
            </div>
        );
        // return e('div',
        //     {class: 'container'},
        //     e(Post, {}, null),
        //     e(Post, {}, null),
        //     e(Post, {}, null)
        // );
    }
}