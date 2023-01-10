import React from "react";

import img from "./img-2.png";
import logo from "./logo.png";
import "./AboutUs.css";
export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-lg about-body">
            <h1 className="heading-2 pb-5">About Us</h1>
            <h3 className="subheading-2">How was it started?</h3>
            <p>
              The primary challenge faced by a technical institute, at a time when there is an increased inclination for people to move towards entrepreneurship, is the lack of access to financial knowledge, which is a prerequisite to implement ideas. Economics club, by the virtue of dealing with subjects like economics and finance, is in the best position to address this issue.
            </p>
            <p>
              Creation of resources, organization of guest sessions and organization of competitions can help address the same. Similarly, introducing people to economics, in a way that gets them interested to pursue the area further, through Tuesday night discussions and faculty sessions is essential to promote knowledge on economics, and its significance in assessing government policy and businesses.
            </p>
          </div>
          <div className="col-lg">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }
};
