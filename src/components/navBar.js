import React from 'react';

// let e = React.createElement;

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navBar">
                <ul className="menu">
                    <li className="menu active" style={{display: "inline-block", padding: "0px 20px"}}><a href="#index.html">Home </a></li>    
                    <li className="menu" style={{display: "inline-block", padding: "0px 20px"}}><a href="#about.html">About</a></li>    
                    <li className="menu" style={{display: "inline-block", padding: "0px 20px"}}><a href="#contactUs.html">Contact Us</a></li>
                    <li className="menu" style={{display: "inline-block", padding: "0px 20px"}}><a href="#login.html">Login</a></li>
                </ul>
            </div>
        );  

    //     e('div', null,
    //     e('ul', null,
    //         e('li', {style = {display: 'inline-block'}}},
    //             e('a', {href: "#home.html"}, "Home")),
    //         e('li', {display: "inline-block"},
    //             e('a', {href: "#about.html"}, "About")),
    //         e('li', {display: "inline-block"},
    //             e('a', {href: "#contactUs.html"}, "Contact Us")),
    //         e('li', {display: "inline-block"},
    //             e('a', {href: "#login.html"}, "Login")),
    //     )
    // )


        //     e("nav", null,
        //     e("a", {href: "@home"}, "Home  ")),
        // e("nav", null,
        //     e("a", {href: "@about"}, "About  ")),
        //     e("a", {href: "@contactUs"}, "Contact Us  "),
        //     e("a", {href: "@login"}, "Login  "),

            // e("div", {
            //     className: "navBar"
            // },e("ul",null,
            //     e("li", null, "Home"),
            //     e("li", null, "About"),
            //     e("li", null, "Contact Us"),
            //     e("li", null, "Login")                
            //     ))
            // <div className="navBar">
            //     <ul className="menu">
            //         <li className="menu active"><a href="#index.html">Home </a></li>    
            //         <li className="menu"><a href="#page1.html">Page 1</a></li>    
            //         <li className="menu"><a href="#page2.html">Page 2</a></li>
            //     </ul>
            // </div>
    }

}