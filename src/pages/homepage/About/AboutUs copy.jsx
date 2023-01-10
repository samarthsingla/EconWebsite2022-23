import React from "react";

import img from "./img.png";
import logo from "./logo.png";
export default class AboutUs extends React.Component{
  render() {
    return (
      <div>


        <div className="main-container">
          <div className="m">
            <h1 className="main-heading">ABOUT US</h1>
          </div>
          <div className="s">
            <h2 className="sub-heading">How it was started</h2>
            <div className="flex-container">
              <div className="written-text">
                <p className="subtitle subtitles--1">
                  The primary challenge faced by a technical institute,at a time
                  when there is an increased inclination for people to move towards
                  entrepreneurship, is the lack of access to financial knowledge,
                  which is a prerequisite to implement ideas. Economics club, by the
                  virtue of dealing with subjects like economics and finance, is in
                  the best position to answer this issue.
                </p>
                <p className="subtitle subtitles--2">
                  Creation of resources, organisation of guest sessions and
                  organisation of competitions can help better address the same.
                  Similarly, introducing economics to people, in a way that gets
                  them interested to pursue the area further,through Tuesday night
                  discussions and faculty sessions is essential to promote knowledge
                  on economics and its, and its signifiacance in assessing
                  government policy and businesses.
                </p>
              </div>
              <div className="about-image">
                <img className="intro-image" src="img.png" alt="about us image" />
              </div>
            </div>
            <img src="logo.png" alt="Logo" width={40} height="auto" />
            <br />
            <p className="more-info">More info</p>
            <div className="info-subtitles">
              <div className="info-subtitles-inner">
                Club also conduct knowledge sharing sessions through case studies,
                quizzes and games
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
