import React from "react";

import farmer from "./farmer.png";
import background from "./background.png";
export default class Economica extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4">ECONOMICA</h1>
        
        
        <div className="card mb-4">
          <div className="row ">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-muted">BY SUSHANK MISHRA</h5>
                <p className="card-text">
                  India's New Farm Bills: A Step Forward or Back?(2020)
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    By Haritha K (Miranda House) &amp; Vedanshi Maheshwari (IIT-Delhi)
                    Free and fair elections have become the very watchdog of democracy
                    all over the world.
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={farmer} className="card-img" alt="img-here" />
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="row ">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-muted">BY GOPAL KUMAR JHA</h5>
                <p className="card-text">
                  Indian Festivals and the Rural Economy (2020)
                </p>
                <p className="card-text">
                  <small className="text-muted">
                  Medha Aro Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Omnis blanditiis dolorum id corrupti nam accusamus, ab, magnam nulla,
              mollitia dolorem nihil voluptas quis rem tempore. Optio facere
              cupiditate a pariatur natus, maiores modi nemo quis nisi illo doloribus
              harum eos quisquam et quo, molestias in nam. Mollitia, voluptates
              molestiae? Deleniti expedita alias nobis voluptatibus incidunt rem,
              omnis fuga autem temporibus hic cumque dolore iusto explicabo? ra,
              Miranda House Sundry India has a lot to take pride in!
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-container">
          {/* <div className="item card sado">
            <p className="text-muted top">Behavior and Markets.</p>
            <h3 className="content">Content description</h3>
          </div>
          <div className="item card sado">
            <p className="text-muted top">Behavior and Markets</p>
            <h3 className="content">Content description</h3>
          </div>
          <div className="item card sado">
            <p className="text-muted top">Behavior and Markets</p>
            <h3 className="content">Content description</h3>
          </div>
          <div className="item card sado">
            <p className="text-muted top">Behavior and Markets</p>
            <h3 className="content">Content description</h3>
          </div> */}
        </div>
        <br />
        <br />
      </div>

    );
  }
}