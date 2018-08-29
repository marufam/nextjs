import React from "react";

export default class Article_title extends React.Component {
  render() {
    return (
      <div>
        <div id="titledesc">
          <p>
            By {this.props.author} / EdgeProp | {this.props.date}
          </p>
          <p>Tags: {this.props.tags}</p>
        </div>
        <style jsx>{`
          #titledesc {
            margin-top: 10px;
          }
        `}</style>
      </div>
    );
  }
}
