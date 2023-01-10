import React from "react";

import "./header.css"
import logo from "media/eco.png";
export default class Header extends React.Component{
    render(){
        return(
            <nav
  className="navbar navbar-expand-sm sticky-top navbar-dark"
  style={{ backgroundColor: "rgb(255, 254, 254)"}}
>
  <div className="container">
    {/* Replace this with your own logo */}
    <a className="navbar-brand" href="#">
      <img src={logo} alt="web-image" width="auto" height={100} />
    </a>
    {/* Toggler/collapsibe Button for small screens */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#myList"
      aria-controls="myList"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    {/* List of links */}
    <div className="collapse navbar-collapse" id="myList">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <a href="#" className="nav-link active" style={{ color: "black" }}>
            {" "}
            Home{" "}
          </a>
        </li>
        <li className="nav-item active">
          <a href="#" className="nav-link active" style={{ color: "black" }}>
            {" "}
            About Us{" "}
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" style={{ color: "black" }}>
            Blog{" "}
          </a>
        </li>
        {/* <li className="nav-item active">
          <a href="#" className="nav-link active" style={{ color: "black" }}>
            {" "}
            Team{" "}
          </a>
        </li> */}
        <li className="nav-item">
          <a href="/winterschool" className="nav-link" style={{ color: "black" }}>
            Winter School{" "}
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        )
    }
}