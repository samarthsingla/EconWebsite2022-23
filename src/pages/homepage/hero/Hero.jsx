import React from "react";
import "./Hero.css";

import p5 from "p5";
import TOPOLOGY from "vanta/dist/vanta.topology.min.js";
import DOTS from "vanta/dist/vanta.dots.min.js";
import RINGS from "vanta/dist/vanta.rings.min.js";
import HALO from "vanta/dist/vanta.halo.min.js";

export default class Hero extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()

    }
    componentDidMount() {
        this.vantaEffect = TOPOLOGY({
            el: this.vantaRef.current,
            p5: p5,
            color: '#bd6f0c',
            backgroundColor: "#031535",
            showLines:false,
            scaleMobile: 1.5,
            scale:1.00,
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy();
        }
    }

    render() {
        return (
            <div className=" text-center bg-image vanta-canvas" ref={this.vantaRef}>
                <div className="row p-5">
                    <div className="col-lg-8 text-col align-items-start">
                        <h1 className="heading text-start text-uppercase">
                            Economics &amp; Finance Club
                        </h1>
                        <h2 className="heading text-start">IIT DELHI</h2>
                        <p className="lead body-text text-start">
                            The primary challenge faced by a technical institute, at a time when
                            there is an increased inclination for people to move towards
                            entrepreneurship, is the lack of access to financial knowledge, which is
                            a prerequisite to implement ideas. Economics club, by the virtue of
                            dealing with subjects like economics and finance, is in the best
                            position to address this issue.
                        </p>
                        <div className="row align-items-start">
                            <a href="#" class="btn_custom btn_custom-1">
                                <svg>
                                    <rect x="1" y="1" fill="none" width="100%" height="100%" rx={0} ry={0} />
                                </svg>
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}