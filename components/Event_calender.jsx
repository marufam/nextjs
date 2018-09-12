import React from "react";
import Link from "next/link";

export default class event_calender extends React.Component {
  render() {
    return (
      <div id="event">
        <div id="event-title">
            Event calender
        </div>
        <div id="event-content">
          {this.props.data.map(event => (
            <Link href={event.link} key={event.id}>
              <a>
                <div id="event-contain">
                <img src="" alt=""/>
                <div id="event-number">
                  {event.id}
                </div>
                <div id="event-content-title">   
                  {event.name}
                </div>
                </div>
              </a>
            </Link>
            
          ))}
          
        </div>
        <br/>
        <style jsx>{`
          
        `}</style>
        <br id="break"/>
      </div>
    );
  }
}
