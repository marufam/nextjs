import React from "react";
import Link from "next/link";
import Search_article from "./Search_article";
// import Event_calender from "./Event_calender";

export default class top_article extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <div id="side-title">
            Top Articles
        </div>
        <div id="side-content">
          
          {this.props.data.map(top => (
            <Link href={top.link} key={top.id}>
              <a>
                <div id="top-conttent">
                <div id="side-number">
                  {top.id}
                </div>
                <div id="side-content-title">   
                  {top.name}
                </div>
                </div>
              </a>
            </Link>
            
          ))}
          
        </div>
        <br/><br/>
        <Search_article/>
        <hr/>
        {/* <Event_calender data={this.props.event}/> */}
        <div id="event-title">
           <h3> Event calender</h3>
        </div>
        <div id="event-content">
          {this.props.data2.map(event => (
            <Link href={event.link} key={event.id}>
              <a id="link">
                <div id="event-contain">
                <img src={event.img} width="100%" alt={event.name}/>
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
          #break{
            clear:both;
          }
          #event-content-title{
            font-weight:bold;
            background-color: #f3f6f9;
            margin: 0px 2px 2px 2px;
            padding: 0.5rem;
          }
          #link{
            text-decoration:none;
          }
          #top-conttent {
            /* overflow to handle inner floating block */
            overflow: hidden;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          #side-number{
            width:10%;
            font-size:30px;
            float:left;
            padding:10px;
            font-style:bold;
          }
          #side-content-title{
            width:75%;
            float:right;
            padding:10px;
          }
          #social_icon {
            margin-right: 5px;
          }
          #social_title {
            margin-bottom: 0px;
          }
          #sidebar {
            float: right;
            width: 25%;
            height: 100px;
            
          }
          #side-title{
            background-color: rgb(251, 239, 214);
            word-break: normal;
            padding: 10px;
            font-size:20px;
            font-family: Poppins,san-serif;
          }
        `}</style>
        <br id="break"/>
      </div>
    );
  }
}
