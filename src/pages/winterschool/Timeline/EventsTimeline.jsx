import { data, map } from "jquery";
import React, { Fragment } from "react";
import { render } from "react-dom";
import { Timeline, Event } from "react-timeline-scribble";

class EventData{
    constructor(day, title, description){
        this.data = {'day':day, 'title':title, "description":description}
    }
}
export default class EventsTimeline extends React.Component {

    
    week1 = [
        new EventData("Monday", "Abstractify Day 1", "Case Study Prompt to be Released"),
        new EventData("Tuesday","Keynote Session", "Financial Markets: The Backbone of Economy"),
    ]
    week2 = [
        new EventData("Tuesday", "Lecture 3", "Tech and Trading: Past Present and Future"),
    ]


    render() {
        return (
            <Fragment>
                <p className="display-4">Week 1</p>
                <Timeline>
                    {map(this.week1, this.RenderEvent)}
                </Timeline>

                <p className="display-4 mt-5">Week 2</p>
                <Timeline>
                    {map(this.week2, this.RenderEvent)}
                </Timeline>
            </Fragment>
        );
    }

    Heading(title, subtitle){
        return(
            <>
                <h1>{title}</h1>
                <h3 className="mb-4">{subtitle}</h3>
            </>
        )
    }

    RenderEvent(event){
        data = event.data;
        return(
            <Event interval={data['day']} title={data['title']}>
                {/* <h2 className="display-4">{data['title']}</h2>   */}
               {data['description']}
               <div style={{width:"75vw"}}></div>
            </Event>
        );
    }
}

