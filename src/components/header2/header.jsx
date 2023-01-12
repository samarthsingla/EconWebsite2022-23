import React from "react";
import "./style.css";
import $ from "jquery";

import logo from "media/ecobg_removed.png";
export default class Header extends React.Component {
    menuItems = [{"Home":"/"}];

    render() {
        return (
            <section className="ftco-section">
                {/* <div className="wrap">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col">
                                <p className="mb-0 phone">
                                    <span className="fa fa-phone" /> <a href="#">+91 7042908100</a>
                                </p>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <div className="social-media">
                                    <p className="mb-0 d-flex">
                                        <a
                                            href="#"
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <span className="fa fa-facebook">
                                                <i className="sr-only">Facebook</i>
                                            </span>
                                        </a>
                                        <a
                                            href="#"
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <span className="fa fa-twitter">
                                                <i className="sr-only">Twitter</i>
                                            </span>
                                        </a>
                                        <a
                                            href="#"
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <span className="fa fa-instagram">
                                                <i className="sr-only">Instagram</i>
                                            </span>
                                        </a>
                                        <a
                                            href="#"
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <span className="fa fa-dribbble">
                                                <i className="sr-only">Dribbble</i>
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <nav
                    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                    id="ftco-navbar"
                >
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="web-image" width="auto" height={80} />
                        </a>
                        {/* <form action="#" className="searchform order-sm-start order-lg-last">
                            <div className="form-group d-flex">
                                <input
                                    type="text"
                                    className="form-control pl-3"
                                    placeholder="Search"
                                />
                                <button type="submit" placeholder="" className="form-control search">
                                    <span className="fa fa-search" />
                                </button>
                            </div>
                        </form> */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            // data-toggle="collapse"
                            // data-target="#ftco-nav"
                            // aria-controls="ftco-nav"
                            // aria-expanded="true"
                            // aria-label="Toggle navigation"
                            onClick={()=>{
                                $("#ftco-nav").toggleClass("collapse");
                            }}
                        >
                            <span className="fa fa-bars" /> Menu
                        </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <a href="/" className="nav-link">
                                        Home
                                    </a>
                                </li>

                                {/* Dropdown */}
                                {/* <li className="nav-item dropdown" 
                                onMouseEnter={(e) => {
                                    $(e.target).parent().find(".dropdown-menu").addClass("show")
                                }}
                                onMouseLeave={(e) => {
                                    $(e.target).parent().find(".dropdown-menu").removeClass("show");
                                }}
                                >
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="dropdown04"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        // onMouseEnter={(e) => {console.log("Hover ON");}}
                                    >
                                        Page
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown04"
                                    >
                                        <a className="dropdown-item" href="#">
                                            Page 1
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Page 2
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Page 3
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Page 4
                                        </a>
                                    </div>
                                </li> */}

                                <li className="nav-item">
                                    <a href="#about" className="nav-link">
                                        About Us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="winterschool" className="nav-link">
                                        Winter School
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.instagram.com/ecoclubiitd/" className="nav-link" target="_blank">
                                    <span className="fa fa-instagram">
                                        <i className="sr-only">Instagram</i>
                                    </span>
                                    Instagram
                                    </a>
                                </li>

{/*                         
                            <li className="nav-item dropdown" 
                                onMouseEnter={(e) => {
                                    $(e.target).parent().find(".dropdown-menu").addClass("show")
                                }}
                                onMouseLeave={(e) => {
                                    $(e.target).parent().find(".dropdown-menu").removeClass("show");
                                }}
                                >
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="dropdown04"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        // onMouseEnter={(e) => {console.log("Hover ON");}}
                                    >
                                        Social
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown04"
                                    >
                                        <a className="dropdown-item" href="#">
                                            Page 1
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Page 2
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Page 3
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Page 4
                                        </a>
                                    </div>
                            </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* END nav */}
            </section>

        );
    }
    
}