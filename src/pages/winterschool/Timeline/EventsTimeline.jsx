import React, { Fragment } from "react";
import { render } from "react-dom";
import { Timeline, Event } from "react-timeline-scribble";


export default class EventsTimeline extends React.Component {
    render() {
        return (
            <Fragment>
                <Timeline>
                    {this.Heading("Week 1", "Getting Started")}
                    <Event interval={"2013 - 2014"}>
                        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </Event>
                    <Event interval={"2015 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
                        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </Event>
                    {this.Heading("Week 2", "Trading Deep Dive")}

                    {this.Heading("Week 3", "Systems Deep Dive")}

                    {this.Heading("Week 4", "Life as a Quant")}


                </Timeline>
            </Fragment>
        );
    }

    Heading(title, subtitle){
        return(
            <>
            <h1>
                {title}
            </h1>
            <h3 className="pb-5">
                {subtitle}
            </h3>
            </>
        )
    }
}

