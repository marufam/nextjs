import React from "react";
import Link from "next/link";

export default class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <Link href="/">
          <a>{this.props.title}</a>
        </Link>
        <style jsx>{`
          #header {
            padding: 20px;
            border: 1px solid #ddd;
          }
          a {
            color: black;
            text-decoration: none;
          }
        `}</style>
      </div>
    );
  }
}
