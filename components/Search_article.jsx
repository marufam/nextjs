import React from "react";
import Link from "next/link";

export default class search_article extends React.Component {
  render() {
    return (
      <div id="search_article">
        <div id="search_title">Search Article </div>
        <input type="text" name="search" placeholder="Enter keyword" id="search"/>
        <style jsx>{`
          #search_article{
            background-color: #f4f6f9;
            padding-top: 12px;
            width:100%;
            text-align: center;
            padding-bottom: 20px;
          }
          #search_title{
            font-size:20px;
          }
        `}</style>
      </div>
    );
  }
}
