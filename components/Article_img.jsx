import React from "react";

export default class Article_title extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <p id="imgdesc">{this.props.img_desc}</p>
        <style jsx>{`
          #imgdesc {
            margin-top: 0px;
          }
        `}</style>
      </div>
    );
  }
}
